import { ISharepointList } from "./sharepoint-list";
export interface iCoreBusinessCard extends ISharepointList {
    CardButtonRedirectURL: string;
    CardButtonText: string;
    CardDescription: string;
    CardImg: string;
}
export interface ICoreBusinessAsset extends iCoreBusinessCard {
    CardImg: string;
}
export interface ICardIMG {
    fieldId: string;
    fieldName: string;
    fileName: string;
    id: string;
    serverRelativeUrl: string;
    type: string;
}
export interface iCoreBusiness extends ISharepointList {
    Subtitle: string;
}