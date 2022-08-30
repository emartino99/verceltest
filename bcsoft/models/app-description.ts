import { ISharepointListStyle } from "./sharepoint-list";
export interface IAppDescription extends ISharepointListStyle {
    firstDescription: string;
    image: string;
    imageALT: string;
    secondDescription: string;
    secondTitle: string;
}