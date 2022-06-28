import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as spauth from 'node-sp-auth';


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log("🚀 ~ file: resources.ts ~ line 13 ~ req", req.headers)
  spauth.getAuth(`https://bcsoftsrl.sharepoint.com/`, {
    clientId: process.env.NEXT_PUBLIC_ID_CLIENT!,
    clientSecret: process.env.NEXT_PUBLIC_SECRET!
  }).then(
    response => {
    // console.log("🚀 ~ file: resources.ts ~ line 19 ~ response", response.headers.Authorization)
      //  https://{site_url}/_api/web/lists(guid'{list_guid}')

      // {
      //   "spItemUrl": "https://bcsoftsrl.sharepoint.com:443/_api/v2.1/drives/b!y7BubRi1wUmIBTJc-4HojKhS5Gb5BzFGr6q_E_R9lmv8_kdBe1Q4TqKGiU9cyXfP/items/01INGHAL6CH2CRQ667GVHZYQSPTOWXIHAL",
      //     "fileVersion": 2,
      //       "sponsorToken": "L3NpdGVzL0JDU29mdC5uZXQudGVzdC9MaXN0cy9jb3JlQnVzaW5lc3NDYXJkc3xDYXJkSW1nfDI"
      // }
      // GetFileByServerRelativePath(decodedurl='/sites/BCSoft.net.test/SiteAssets/Lists/6d3bc0b6-7808-4da9-afbf-1e16b7c51129/code3.png')
      // https://bcsoftsrl.sharepoint.com/sites/BCSoft.net.test/_api/Web/GetFileByServerRelativePath(decodedurl='/sites/BCSoft.net.test/SiteAssets/Lists/6d3bc0b6-7808-4da9-afbf-1e16b7c51129/team.png')
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_DOMAIN}${req.headers['data-serverrelativeurl']}`,{headers: {
        "Accept": "application/json;odata=verbose",
        "Authorization": response.headers.Authorization || '',
        "responseType": "blob"
      }
      }).then(resolve => {
      // console.log("🚀 ~ file: resources.ts ~ line 28 ~ axios.get ~ resolve", resolve)
      // console.log("🚀 ~ file: resources.ts ~ line 24 ~ resolve", resolve.data)
        // fileId: response["response"]["Id"],
        //   fileName: response["response"]["Name"],
        //     fileAuthor: response["response"]["Author"],
        //       fileContent: response["response"]["body"]["$content"],
        //         filePath: response["path"],
      // const encode = fs.readFileSync(resolve.data, {encoding: 'base64'})

      // console.log("🚀 ~ file: resources.ts ~ line 32 ~ axios.get ~ encode", encode)
        res.status(200).json(resolve.data)
      }).catch(error => {
      console.log("🚀 ~ file: resources.ts ~ line 28 ~ error", error)
        res.status(error.status).json(error.status)
      })
      
    }
  ).catch(console.error)
}
 