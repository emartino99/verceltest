import { ISharepointList } from "./sharepoint-list";

export interface IForm extends ISharepointList {}
export interface IFormMainSettings extends ISharepointList {
    CV: string;
    mainDescription: string;
    secondRadioButtonTitle: string;
    sideContentDescription: string;
    sideContentTitle: string;
    Telefono: string;
    textAreaTitle: string;
}