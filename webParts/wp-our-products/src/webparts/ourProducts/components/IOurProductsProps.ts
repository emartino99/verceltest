import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPRest } from "@pnp/sp";

export interface IOurProductsProps {
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
