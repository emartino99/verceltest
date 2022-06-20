import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as spauth from 'node-sp-auth';
import { ENDPOINTS, ENDPOINTS_TYPE } from '../../services/endpoints';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  spauth.getAuth(`https://bcsoftsrl.sharepoint.com/`, {
    clientId: process.env.NEXT_PUBLIC_ID_CLIENT!,
    clientSecret: process.env.NEXT_PUBLIC_SECRET!
  }).then(
    response => {
      axios.get(ENDPOINTS[req.query.endpoint as ENDPOINTS_TYPE],{headers: {
        "Accept": "application/json;odata=verbose",
        "Authorization": response.headers.Authorization || ''
      }
      }).then(resolve => res.status(200).json(resolve.data))
      
    }
  ).catch(console.error)
}
