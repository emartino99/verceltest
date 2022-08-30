import { ISharepointList, ISharepointListButton } from "./sharepoint-list";

export type FlexDirection = 'row' | 'column';
export interface ICardAvaiableService extends ISharepointList {
    backgroundColor: string;
    borderColor: string;
    cardMinHeight: string;
    cardPosition: string;
    flexDirection: FlexDirection;
    image: string;
    textColor: string;
}
export interface IAvaiableServicesMainSettings extends ISharepointList, ISharepointListButton {
    description: string;
    image: string;
    rotate: string;
    titleColor: string;
}