import { SPRest } from "@pnp/sp/presets/all";
import { IClients } from '../models';

export const getClients = async  (sp: SPRest): Promise<IClients[]> =>  {
    const clients: IClients[] = await sp.web.lists.getByTitle('clientsPresentation').items.getAll();
    return clients;
};
