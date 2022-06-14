import { SPRest } from "@pnp/sp/presets/all";
import { ILocations } from "../models";

export const getLocationsInfo = async  (sp: SPRest): Promise<ILocations[]> =>  {
    const locationsInfo: ILocations[] = await sp.web.lists.getByTitle('bcSoftLocations').items.getAll();
    return locationsInfo;
};
