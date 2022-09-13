import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface ICertifications extends ISharepointList, ISharepointListButton {
    certificationImage: string;
    description: string;
    invertPosition: string;
    style: string;
    ALTImage: string;
}