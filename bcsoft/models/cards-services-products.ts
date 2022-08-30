import { ISharepointList } from "./sharepoint-list";
export interface ICardServicesProducts extends ISharepointList {
    backgroundColor: string;
    description: string;
    image: string;
}
export interface IServicesProductsMainSettings extends ISharepointList {
    description: string;
}