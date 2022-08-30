import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface INumbers extends ISharepointList {
    CardDescription: string;
}
export interface INumbersMainSettings extends ISharepointList, ISharepointListButton {
    backgroundImage: string;
    description: string;
    image: string;
    rotate: string;
}