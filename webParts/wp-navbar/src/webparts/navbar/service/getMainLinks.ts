import { SPRest } from "@pnp/sp/presets/all";
import { IMainLinks } from "../models";

export const getMainLinks = async  (sp: SPRest): Promise<IMainLinks[]> =>  {
    const mainLinks: IMainLinks[] = await sp.web.lists.getByTitle('navbarMainLinks').items.getAll();
    return mainLinks;
};
