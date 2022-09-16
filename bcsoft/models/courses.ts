import { ISharepointList } from "./sharepoint-list";
export interface ICourses extends ISharepointList {
    CorsoImg: string;
}
export interface ICoursesMainSettings extends ISharepointList {
    buttonLabel: string;
    Description: string;
    href: string;
    style: string;
}