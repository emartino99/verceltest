import { ISharepointList } from "./sharepoint-list";
export interface IServicesItem extends ISharepointList {
    description: string;
    image: string;
    imageTitle: string;
    style: string;
}