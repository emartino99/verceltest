import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface ICoursesMastersMainSettings extends ISharepointList, ISharepointListButton {
    mainDescription: string;
    secondaryDescription: string;
    secondaryTitle: string;
}