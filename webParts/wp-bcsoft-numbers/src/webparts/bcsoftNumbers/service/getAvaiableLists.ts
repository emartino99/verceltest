import { SPRest } from "@pnp/sp/presets/all";

export const getAvaiableLists = async (sp: SPRest) =>  {
    return (await sp.web.lists()).filter(list => list.Title.startsWith('bcSoftNumbers'));
};