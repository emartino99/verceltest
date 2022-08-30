import { ISharepointListButton, ISharepointListStyle } from "./sharepoint-list";
export interface IServices extends ISharepointListStyle {
    description: string;
    descriptionHover: string;
    image: string;
}
export interface IServicesMainSettings extends ISharepointListStyle, ISharepointListButton {
    description: string;
    subtitle: string;
}