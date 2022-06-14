import { SPRest } from "@pnp/sp/presets/all";
import { ISubLinks } from "../models";

export const getSubLinks = async  (sp: SPRest): Promise<ISubLinks[]> =>  {
    const subLinks: ISubLinks[] = await sp.web.lists.getByTitle('navbarSubMenuLinks').items.getAll();
    return subLinks;
};