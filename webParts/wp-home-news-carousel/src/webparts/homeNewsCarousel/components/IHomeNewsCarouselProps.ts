import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IHomeNewsCarouselProps {
  title: string;
  description: string;
  descriptionUrl: string;
  backgroundColor:string;
  titleColor:string;
  descriptionColor:string;
  shouldWorkFromList: boolean;
  context: WebPartContext;
  sp: SPRest;
}
