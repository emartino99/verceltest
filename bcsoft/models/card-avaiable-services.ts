export type FlexDirection = 'row' | 'column';

export interface ICardAvaiableService {
    ID: number;
    Title: string;
    backgroundColor: string;
    borderColor: string;
    flexDirection: FlexDirection;
    image: string;
    cardMinHeight: string;
    textColor: string;
    cardPosition: string;
}

export interface IAvaiableServicesMainSettings {
    ID: number;
    Title: string;
    titleColor: string;
    description: string;
    image: string;
    buttonLabel: string;
    buttonHref: string;
    rotate: string;
}