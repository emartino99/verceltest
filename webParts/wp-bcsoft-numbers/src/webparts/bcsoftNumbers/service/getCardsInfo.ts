import { SPRest } from "@pnp/sp/presets/all";
import { ICard } from "../models";

export const getCardsInfo = async (sp: SPRest, listId: string): Promise<ICard[]> =>  {

    if(!listId) return [];

    const cards: ICard[] = await sp.web.lists.getById(listId).items.select('Title, CardDescription').getAll();
    return cards;
};
