import { ISharepointList } from "./sharepoint-list";
export interface ISubLinks extends ISharepointList {
    SubLinkID: number;
    SubLinkURL: string;
}
export interface IMainLinks extends ISharepointList {
    HasSubLinks: string;
    LinkID: number;
    LinkURL?: string;
}