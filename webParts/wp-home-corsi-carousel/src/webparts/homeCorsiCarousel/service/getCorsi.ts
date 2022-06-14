import { SPRest } from "@pnp/sp/presets/all";
import { ICorsi } from "../models";

export const getCorsi = async  (sp: SPRest): Promise<ICorsi[]> =>  {
    const corsi: ICorsi[] = await sp.web.lists.getByTitle('corsi').items.getAll();
    return corsi;
};
