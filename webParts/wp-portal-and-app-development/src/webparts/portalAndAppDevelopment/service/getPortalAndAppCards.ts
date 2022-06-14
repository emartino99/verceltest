import { SPRest } from "@pnp/sp/presets/all";

export interface IPortalAndAppCardsModel {
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
    AppImg: string;
}

export const getPortalAndAppCards = async  (sp: SPRest): Promise<IPortalAndAppCardsModel[]> =>  {
    const portalAndAppCards: IPortalAndAppCardsModel[] = await sp.web.lists.getByTitle('Sviluppo portali e app').items.getAll();
    console.log(portalAndAppCards);
    return portalAndAppCards;
};
