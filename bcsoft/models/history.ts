import { ISharepointList } from "./sharepoint-list";
export interface IHistoryCard extends ISharepointList {
    Event: string;
    NumberOfEmployees: string;
    YearToShow: number;
}
export interface IHistoryMainSettings extends ISharepointList {
    description: string;
}
export interface IHistoryCardProps {
    isActive: boolean;
    isEven: boolean;
    isTheLastOne: boolean;
    yearToShow: string;
}