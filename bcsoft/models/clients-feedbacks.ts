import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IFeedbacks extends ISharepointList, ISharepointListButton {
    company: string;
    description: string;
    image: string;
    mainTitle: string;
}
export interface IFeedbacksMainSettings extends ISharepointList {
    description: string;
    subtitle: string;
}