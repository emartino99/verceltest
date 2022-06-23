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

      // https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files('{file_name}')/$value Authorization: "Bearer " + accessToken
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}/GetFolderByServerRelativeUrl('${req.headers['data-serverrelativeurl']}')/Files('${req.headers['data-filename']}')/$value`,{headers: {
        "Accept": "application/json;odata=verbose",
        "Authorization": response.headers.Authorization || ''
      }
      }).then(resolve => {
      console.log("🚀 ~ file: resources.ts ~ line 24 ~ resolve", resolve.data)
        res.status(200).json(resolve.data)
      }).catch(error => {
      console.log("🚀 ~ file: resources.ts ~ line 28 ~ error", error)
        res.status(error.status).json(error.status)
      })
      
    }
  ).catch(console.error)
}

