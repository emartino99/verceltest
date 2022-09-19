import { ISharepointListStyle, ISharepointListButton } from "./sharepoint-list";
export interface ICustomHero extends ISharepointListStyle, ISharepointListButton {
    backgroundImage: string;
    description: string;
    image: string;
    subtitle: string;
    buttonArrowLabel: string;
}