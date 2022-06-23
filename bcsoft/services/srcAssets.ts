import { iCoreBusiness, ICardIMG } from "../models";

export const srcAssets = async (resource: iCoreBusiness) => {
    const parsed: ICardIMG = JSON.parse(resource.CardImg);
    const [zero, domain, base, ...serverRelativeUrl] = parsed.serverRelativeUrl.split('/');
    serverRelativeUrl.pop()
    const headers = new Headers()     
    headers.set("data-serverRelativeUrl", serverRelativeUrl.join('/'));
    headers.set("data-fileName", parsed.fileName);
    const promise = await fetch('./api/resources', {headers})
    console.log("🚀 ~ file: srcAssets.ts ~ line 11 ~ srcAssets ~ promise", promise)
    const response = await promise.json();
    console.log("🚀 ~ file: srcAssets.ts ~ line 13 ~ srcAssets ~ response", response)
    return response as string
    
}