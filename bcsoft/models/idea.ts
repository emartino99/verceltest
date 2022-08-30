import { ISharepointList, ISharepointListButton } from "./sharepoint-list";
export interface IIdea extends ISharepointList {
    descriptionHover: string;
    numberImg: string;
    subtitleHover: string;
}

export interface IIdeaMainSettings extends ISharepointList, ISharepointListButton {}