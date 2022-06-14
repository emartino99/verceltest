import { SPRest } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IBcsoftNumbersProps {
  bcSoftNumersListId: string;
  backgroundColor: string;
  mainTitle: string;
  mainTitleColor: string;
  mainTitleSize: number;
  mainTitleWeight:string;
  mainDescription: string;
  mainDescriptionColor: string;
  mainDescriptionSize: number;
  mainDescriptionWeight:string;
  useImageBackground: boolean;
  useButton: boolean;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  useBcSoftFactoryLogo: boolean;
  invertPosition: boolean;
  urlMedia: string;
  context: WebPartContext;
  sp: SPRest;
}
