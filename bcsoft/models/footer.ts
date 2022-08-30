import { ISharepointList } from "./sharepoint-list";
export interface IFooterLinks extends ISharepointList {
    FooterLinkUrl: string;
    isMain: string;
}