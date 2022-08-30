import { ISharepointList } from "./sharepoint-list";
export interface ICervelloneItem extends ISharepointList {
    description: string;
    image: string;
}
export interface ICervelloneMainSettings extends ISharepointList {
    description: string;
    subtitle: string;
}