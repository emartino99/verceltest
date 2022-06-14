import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IHeroHomePageProps {
  title: string;
  titleAlign: string;
  titleSize: number;
  titleWeight:string;
  textColor:string;
  alignElements: string;
  urlMedia: string;
  videoPlayer: boolean;
  context: WebPartContext;
  sp: SPRest;
}
