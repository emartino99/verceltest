import { ISharepointList } from "./sharepoint-list";
export interface IServicesItem extends ISharepointList {
    darkBackgroundColor: string;
    description: string;
    image: string;
    imageTitle: string;
    rotate: string;
}