import { ISharepointListStyle } from "./sharepoint-list";

export interface INewsDetails extends ISharepointListStyle {
    description: string;
    Image: string;
    ImageALT: string;
    info: string;
}