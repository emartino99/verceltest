import { ISharepointList } from "./sharepoint-list";
export interface IProducts extends ISharepointList {
    image: string;
}
export interface IProductsMainSettings extends ISharepointList {
    description: string;
}