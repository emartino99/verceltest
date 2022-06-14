import { SPRest } from "@pnp/sp/presets/all";

export interface ISviluppoSoftwareCards {
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
    icona: string;
}

export const getSviluppoSoftwareCards = async  (sp: SPRest): Promise<ISviluppoSoftwareCards[]> =>  {
    const sviluppoSoftwareCards: ISviluppoSoftwareCards[] = await sp.web.lists.getByTitle('i nostri servizi - sviluppo software').items.getAll();
    return sviluppoSoftwareCards;
};
