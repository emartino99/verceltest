import { SPRest } from "@pnp/sp/presets/all";

export interface IFormazioneCards {
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
}

export const getFormazioneCards = async  (sp: SPRest): Promise<IFormazioneCards[]> =>  {
    const formazioneCards: IFormazioneCards[] = await sp.web.lists.getByTitle('i nostri servizi - formazione').items.getAll();
    return formazioneCards;
};