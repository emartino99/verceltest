import { ISharepointList } from "./sharepoint-list";
export interface IStrengthsContainer {
    backgroundColor: string;
    flexDirection?: string;
    height?: string;
    hoverTextLeft?: string;
    img?: string;
    imgLeft?: string;
    imgTop?: string;
    left: string;
    thinBorderHeight?: string;
    thinBorderLeft?: string;
    thinBorderTop?: string;
    transform?: string;
    width?: string;
}
export interface IStrengths extends ISharepointList {
    hoverText?: string;
    image?: string;
    imageheight?: string;
    imageWidth?: string;
}