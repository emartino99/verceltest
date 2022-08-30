import { ISharepointList } from "./sharepoint-list";

export interface ILocations extends ISharepointList {
    Email: string;
    Fax: string;
    Indirizzo_x0020_sede: string;
    Telefono: string;
}
export interface ILocationsMainSettings extends ISharepointList {
    description: string;
    rotate: string;
    secondaryTitle: string;
}
export interface IPosition {
    selectedLocation: ILocations | undefined
    x: number;
    y: number;
}