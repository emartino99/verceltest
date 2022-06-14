import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IFooterProps {
  backgroundColor: string;
  textColor: string;
  context: WebPartContext;
  sp: SPRest;
}