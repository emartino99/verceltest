import { ISharepointList } from "./sharepoint-list";
export interface IDeveloperCard extends ISharepointList {
    image: string;
}
export interface IDevelopmentMainSettings extends ISharepointList {
    description: string;
}