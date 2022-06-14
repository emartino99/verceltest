import { ICardIMG, iCoreBusiness } from "../models";

export const parseImgJson = (ArrayToParse: iCoreBusiness[]) => ArrayToParse.map(item => {
    const parsedIMG: ICardIMG =  JSON.parse(item.CardImg);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      CardImg: parsedIMGFullPath
    };
});