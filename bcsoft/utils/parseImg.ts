import { ICardIMG, iCoreBusiness, ICoreBusinessAsset } from "../models";

export const parseImgJson = (ArrayToParse: iCoreBusiness[]): ICoreBusinessAsset[] => ArrayToParse.map(item => {
    const parsedIMG: ICardIMG = JSON.parse(item.CardImg);
    // console.log("🚀 ~ file: parseImg.ts ~ line 5 ~ parsedIMG", parsedIMG)
    const parsedIMGFullPath = `${parsedIMG.serverUrl}${parsedIMG.serverRelativeUrl}`;
    return {
        ...item,
        CardImg: parsedIMGFullPath
    };
});

export const getRelativePath =   (item:string): string =>{
      const parsed = JSON.parse(item);
    return parsed.serverRelativeUrl
}