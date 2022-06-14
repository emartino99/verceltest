import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPRest } from "@pnp/sp";

export interface IOurServicesProps {
  mainTitle: string;
  mainTitleColor: string;
  mainTitleSize: number;
  mainTitleWeight:string;
  mainDescription: string;
  mainDescriptionColor: string;
  mainDescriptionSize: number;
  mainDescriptionWeight:string;
  btnLabel: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  SviluppoSoftwarebtnLabel: string;
  SviluppoSoftwarebtnUrl?: string;
  SviluppoSoftwareenableHrefButton: boolean;
  FormazionebtnLabel: string;
  FormazionebtnUrl?: string;
  FormazioneenableHrefButton: boolean;
  context: WebPartContext;
  sp: SPRest;
}
