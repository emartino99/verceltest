import { ISharepointList } from "./sharepoint-list";

export interface ILinkedinFeed extends ISharepointList {
    image: string;
    redirectTo: string;
}

export interface ILinkedinFeedMainSettings extends ISharepointList {
    subtitle: string;
}