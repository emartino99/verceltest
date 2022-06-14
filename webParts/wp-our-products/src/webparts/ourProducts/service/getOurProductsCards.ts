import { SPRest } from "@pnp/sp/presets/all";

export interface IOurProductsCardsModel {
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
    ProdottiDescription: string;
    ProdottiImg: string;
}

export const getOurProductsCards = async  (sp: SPRest): Promise<IOurProductsCardsModel[]> =>  {
    const ourProductsCards: IOurProductsCardsModel[] = await sp.web.lists.getByTitle('I nostri prodotti').items.getAll();
    return ourProductsCards;
};
