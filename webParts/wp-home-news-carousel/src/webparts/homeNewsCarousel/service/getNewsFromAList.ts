import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPRest } from "@pnp/sp/presets/all";
import { INews } from '../models';

//this is only used for demostration purpose only
interface INewsFromAList {
    FileSystemObjectType: number;
    Id: number;
    ServerRedirectedEmbedUri?: any;
    ServerRedirectedEmbedUrl: string;
    ID: number;
    ContentTypeId: string;
    Title: string;
    Modified: Date;
    Created: Date;
    AuthorId: number;
    EditorId: number;
    OData__UIVersionString: string;
    Attachments: boolean;
    GUID: string;
    ComplianceAssetId?: any;
    BannerImageUrl: string;
    Description: string;
    FirstPublishedDate: Date;
    FileRef0: string;
}

export const getNewsFromAList = async  (context: WebPartContext, sp: SPRest): Promise<INews[]> =>  {
    const news: INewsFromAList[] = await sp.web.lists.getByTitle('news_list').items.getAll();

    const finalNewsObj: INews[] = news.map(item => {
        const BannerImageUrlJsonParsed = JSON.parse(item.BannerImageUrl);
        const imgObj = {
            Description: BannerImageUrlJsonParsed.fileName,
            Url: `${BannerImageUrlJsonParsed.serverUrl}${BannerImageUrlJsonParsed.serverRelativeUrl}`
        };
        return {
            Title: item.Title,
            BannerImageUrl: imgObj,
            Description: item.Description,
            FirstPublishedDate: new Date(),
            FileRef: item.FileRef0
        };
    });
    return finalNewsObj;
};


    
