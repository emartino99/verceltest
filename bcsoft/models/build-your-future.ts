import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IFuture extends ISharepointList, ISharepointListButton {
    backgroundImage: string;
    description: string;
}