import { ISharepointList, ISharepointListButton } from "./sharepoint-list";

export interface IDesignCommunication extends ISharepointList {}
export interface IDesignCommunicationMainSettings extends ISharepointList, ISharepointListButton {
    communicationImage: string;
    designImage: string;
    image: string;
}
