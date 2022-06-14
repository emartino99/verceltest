import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IBcsoftLocationsProps {
  rotate: boolean;
  backgroundColor: string;
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight:string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight:string;
  context: WebPartContext;
  sp: SPRest;
}