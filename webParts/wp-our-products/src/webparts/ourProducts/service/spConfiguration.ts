import { SPRest } from "@pnp/sp/presets/all";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export const setupConfiguration = (context: WebPartContext, sp: SPRest) => sp.setup(context);