export interface iCoreBusinessCard {
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
    CardImg: string;
    CardDescription: string;
    CardButtonText: string;
    CardButtonRedirectURL: string;
}
export interface ICoreBusinessAsset extends iCoreBusinessCard {
    CardImg: string;
}
export interface ICardIMG {
    type: string;
    fileName: string;
    fieldName: string;
    serverUrl: string;
    fieldId: string;
    serverRelativeUrl: string;
    id: string;
}
export interface iCoreBusiness {
    FileSystemObjectType: number;
    Id: number;
    ID: number;
    Title: string;
    Subtitle: string;
    
}