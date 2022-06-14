import { ISviluppoSoftwareCards } from "../service/getSviluppoSoftwareCards";

export interface ApiIMG {
    type: string;
    fileName: string;
    fieldName: string;
    serverUrl: string;
    fieldId: string;
    serverRelativeUrl: string;
    id: string;
}

export const parseImgJson = (ArrayToParse: ISviluppoSoftwareCards[]) => ArrayToParse.map(item => {
    const parsedIMG: ApiIMG =  JSON.parse(item.icona);
    const parsedIMGFullPath = `${parsedIMG.serverUrl}/${parsedIMG.serverRelativeUrl}`;
    return {
      ...item,
      icona: parsedIMGFullPath
    };
});