import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IInfoBanner extends ISharepointList, ISharepointListButton {
    backgroundColor: string;
    description: string;
    layoutOrder: string;
    whiteColorTextAndButton: string;
}