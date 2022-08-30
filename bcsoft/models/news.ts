import { ISharepointList } from "./sharepoint-list";
export interface INews extends ISharepointList {
    BannerImageUrl: string;
    Description: string;
    FileRef: string;
    FirstPublishedDate: Date;
    Topic: string;
}