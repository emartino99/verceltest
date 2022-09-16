import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IInfoBanner extends ISharepointList, ISharepointListButton {
    description: string;
    layoutOrder: string;
    style: string;
}