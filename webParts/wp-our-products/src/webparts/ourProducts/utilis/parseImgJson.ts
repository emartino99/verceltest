import { IOurProductsCardsModel } from "../service/getOurProductsCards";

export interface ICardProductsIMG {
    type: string;
    fileName: string;
    fieldName: string;
    serverUrl: string;
    fieldId: string;
    serverRelativeUrl: string;
    id: string;
}

export const parseImgJson = (ArrayToParse: IOurProductsCardsModel[]) => ArrayToParse.map(item => {
    const parsedIMG: ICardProductsIMG =  JSON.parse(item.ProdottiImg);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      ProdottiImg: parsedIMGFullPath
    };
});