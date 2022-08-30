export interface ISharepointList {
    ID: number;
    Title: string;
}

export interface ISharepointListButton {
    buttonLabel: string;
    buttonHref: string;
}

export interface ISharepointListStyle extends ISharepointList {
    field: string;
    style: string;
}