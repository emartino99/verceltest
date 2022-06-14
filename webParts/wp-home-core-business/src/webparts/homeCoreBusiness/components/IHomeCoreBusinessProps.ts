import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IHomeCoreBusinessProps {
  sectionIndex: number;
  title: string;
  titleColor:string;
  titleSize: string;
  subtitle: string;
  subtitleColor:string;
  subtitleSize: string;
  cardTextSize: string;
  context: WebPartContext;
  sp: SPRest;
}