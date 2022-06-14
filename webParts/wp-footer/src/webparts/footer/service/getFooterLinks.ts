import { SPRest } from "@pnp/sp/presets/all";
import { IFooterLinks } from "../models";

export const getFooterLinks = async  (sp: SPRest): Promise<IFooterLinks[]> =>  {
    const footerLinks: IFooterLinks[] = await sp.web.lists.getByTitle('footerLinks').items.getAll();
    return footerLinks;
};
