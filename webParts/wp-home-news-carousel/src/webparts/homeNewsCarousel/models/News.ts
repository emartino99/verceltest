export interface INews {
    Title: string;
    BannerImageUrl: BannerImageUrl;
    Description: string;
    FirstPublishedDate: Date;
    FileRef: string;
}

export interface BannerImageUrl {
    Description: string;
    Url: string;
}
