import { ICardIMG, IClients } from "../models";

export const parseImgJson = (ArrayToParse: IClients[]) => ArrayToParse.map(item => {
    const parsedIMG: ICardIMG =  JSON.parse(item.ClientLogo);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      ClientLogo: parsedIMGFullPath
    };
});