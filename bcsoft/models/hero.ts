import { ISharepointList } from "./sharepoint-list";
export interface IQuickLinks extends ISharepointList {
    QuickLinkUrl: string;
}
export interface IHeroMedia extends ISharepointList {
    ImgURL: string;
    MediaURL?: any;
}