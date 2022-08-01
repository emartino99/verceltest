export interface ILatestNewsMainSettings {
    ID: number;
    Title: string;
    subtitle: string;
}

export interface ILatestNews {
    ID: number;
    Title: string;
    description: string;
    image: string;
    backgroundColor: string;
    buttonLabel: string;
    buttonHref: string;
}

export interface ILatestNewsNewsletter {
    ID: number;
    Title: string;
    description: string;
    image: string;
}