import { SPRest } from "@pnp/sp/presets/all";
import { iCoreBusiness } from "../models";

export const getCoreBusiness = async  (sp: SPRest): Promise<iCoreBusiness[]> =>  {
    const coreBusiness: iCoreBusiness[] = await sp.web.lists.getByTitle('coreBusinessCards').items.getAll();
    return coreBusiness;
};
