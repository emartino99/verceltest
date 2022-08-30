import { ISharepointList } from "./sharepoint-list";
export interface ICourses extends ISharepointList {
    CorsoImg: string;
}
export interface ICoursesMainSettings extends ISharepointList {
    backgroundColor: string;
    buttonLabel: string;
    Description: string;
    href: string;
}