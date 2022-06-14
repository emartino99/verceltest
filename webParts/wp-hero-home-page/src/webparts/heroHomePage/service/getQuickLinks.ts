import { SPRest } from "@pnp/sp/presets/all";
import { IQuickLinks } from "../models";

export const getQuickLinks = async  (sp: SPRest): Promise<IQuickLinks[]> =>  {
    const quickLinks: IQuickLinks[] = await sp.web.lists.getByTitle('heroQuickLinks').items.getAll();
    return quickLinks;
};
