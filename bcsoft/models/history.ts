export interface IHistoryCard {
    ID: number;
    Title: string;
    Event: string;
    NumberOfEmployees: string;
    YearToShow: number;
}

export interface IHistoryMainSettings {
    ID: number;
    Title: string;
    description: string;
}

export interface IHistoryCardProps {
    isEven: boolean;
    yearToShow: string;
    isTheLastOne: boolean;
    isActive: boolean;
}