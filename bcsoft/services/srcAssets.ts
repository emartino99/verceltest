import { iCoreBusiness, ICardIMG } from "../models";

export const srcAssets = async (serverRelativeUrl: string) => {

    // const [zero, domain, base, ...serverRelativeUrl] = parsed.serverRelativeUrl.split('/');
    // console.log("🚀 ~ file: srcAssets.ts ~ line 6 ~ srcAssets ~ serverRelativeUrl", serverRelativeUrl)
    // serverRelativeUrl.pop()
    const headers = new Headers()     
    headers.set("data-serverRelativeUrl", serverRelativeUrl);
    // console.log("🚀 ~ file: srcAssets.ts ~ line 10 ~ srcAssets ~ parsed.serverRelativeUrl", parsed.serverRelativeUrl)
    // headers.set("data-fileName", parsed.fileName);
    const promise = await fetch('./api/resources', {headers})
    // console.log("🚀 ~ file: srcAssets.ts ~ line 11 ~ srcAssets ~ promise", promise)
    const response = await promise.blob();
    // console.log("🚀 ~ file: srcAssets.ts ~ line 15 ~ srcAssets ~ response", response)
     
    // const encode = btoa(unescape(encodeURIComponent(response)));
    // return `data:image/png;base64,${encode}`;
    return response  
 
    
}