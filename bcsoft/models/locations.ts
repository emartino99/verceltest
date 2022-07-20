export interface ILocations {
    ID: number;
    Title: string;
    GUID: string;
    Indirizzo_x0020_sede: string;
    Telefono: string;
    Fax: string;
    Email: string;
}
export interface ILocationsMainSettings {
    ID: number;
    Title: string;
    secondaryTitle: string;
    description: string;
    rotate: string;
}
export interface IPosition {
    x: number;
    y: number;
    selectedLocation: ILocations | undefined
}