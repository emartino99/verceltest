import { IPortalAndAppCardsModel } from "../service/getPortalAndAppCards";

export interface ICardAppIMG {
    type: string;
    fileName: string;
    fieldName: string;
    serverUrl: string;
    fieldId: string;
    serverRelativeUrl: string;
    id: string;
}

export const parseImgJson = (ArrayToParse: any[]) => ArrayToParse.map(item => {
    const parsedIMG: ICardAppIMG =  JSON.parse(item.AppImg);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      AppImg: parsedIMGFullPath
    };
});