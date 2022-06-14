import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IHomeCorsiCarouselProps {
  sectionIndex:number;
  backgroundColor:string;
  titleColor:string;
  subtitleColor:string;
  title:string;
  subtitle:string;
  buttonText:string;
  buttonStyle:string;
  buttonLink:string;
  context: WebPartContext;
  sp: SPRest;
}
