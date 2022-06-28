export interface ILocations {
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
    Indirizzo_x0020_sede: string;
    Telefono: string;
    Fax: string;
    Email: string;
}

export interface IPosition {
    x: number;
    y: number;
    selectedLocation: ILocations | undefined
}