import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IJobOffers extends ISharepointList, ISharepointListButton {
    description: string;
    image: string;
}