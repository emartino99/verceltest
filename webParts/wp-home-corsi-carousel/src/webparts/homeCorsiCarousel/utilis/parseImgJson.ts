import { ICardIMG, ICorsi } from "../models";

export const parseImgJson = (ArrayToParse: ICorsi[]) => ArrayToParse.map(item => {
    const parsedIMG: ICardIMG =  JSON.parse(item.CorsoImg);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      CorsoImg: parsedIMGFullPath
    };
});