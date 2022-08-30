import { ISharepointList } from "./sharepoint-list";
export interface IClients extends ISharepointList {
    ClientLogo: string;
};
export interface IClientsMainSettings extends ISharepointList {
    buttonRouting: string;
    description: string;
}