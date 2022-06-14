import { SPRest } from "@pnp/sp/presets/all";
import { IHistoryCard } from '../models';

export const getHistoryCards = async  (sp: SPRest): Promise<IHistoryCard[]> => {
    const historyCards: IHistoryCard[] = await sp.web.lists.getByTitle('bcSoftHistory').items.getAll();
    return historyCards;
};
