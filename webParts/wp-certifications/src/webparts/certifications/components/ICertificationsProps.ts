export interface ICertificationsProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight:string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight:string;
  textAlign: string;
  backgroundColor: string;
  useCertificationsQuality: boolean;
  useCertificationsTechnical: boolean;
  useCertificationsSecurity: boolean;
  useButton: boolean;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  invertPosition: boolean;
}
