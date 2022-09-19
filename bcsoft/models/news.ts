import { ISharepointList } from "./sharepoint-list";
export interface INews extends ISharepointList {
    BannerImageUrl: string;
    Description: string;
    FileRef0: string;
    FirstPublishedDate: string;
    Topic: string;
    Modified: string;
}