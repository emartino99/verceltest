import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IHomeClientsPresentationProps {
  sectionIndex:number;
  text: string;
  backgroundColor: string;
  textColor: string;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  context: WebPartContext;
  sp: SPRest;
}
