import { ISharepointList } from "./sharepoint-list";
export interface ICoursesStructure extends ISharepointList {
    description: string;
}
export interface ICoursesStructureMainSettings extends ISharepointList {
    cardsBackgroundImage: string;
    description: string;
    headerImage: string;
}