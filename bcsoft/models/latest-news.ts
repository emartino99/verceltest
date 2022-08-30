import { ISharepointList, ISharepointListButton } from "./sharepoint-list";

export interface ILatestNewsMainSettings extends ISharepointList {
    subtitle: string;
}

export interface ILatestNews extends ISharepointList, ISharepointListButton {
    backgroundColor: string;
    description: string;
    image: string;
}

export interface ILatestNewsNewsletter extends ISharepointList {
    description: string;
    image: string;
}