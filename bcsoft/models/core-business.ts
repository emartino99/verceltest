export interface iCoreBusinessCard {
    Id: number; 
    ID: number;
    Title: string;
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
    fieldId: string;
    serverRelativeUrl: string;
    id: string;
}
export interface iCoreBusiness {
    Id: number;
    ID: number;
    Title: string;
    Subtitle: string;
}