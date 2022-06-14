import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface INavbarProps {
  description: string;
  context: WebPartContext;
  sp: SPRest;
}