import * as spauth from 'node-sp-auth'; 

export const getHeader = async () => {
    const response = await spauth.getAuth(`https://bcsoftsrl.sharepoint.com/`, {
        clientId: process.env.NEXT_PUBLIC_ID_CLIENT!,
        clientSecret: process.env.NEXT_PUBLIC_SECRET!
    })
    return {
        "Accept": "application/json;odata=verbose",
        "Authorization": response.headers.Authorization || ''
    }
};
