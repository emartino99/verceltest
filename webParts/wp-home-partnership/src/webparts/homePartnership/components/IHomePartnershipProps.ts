export interface IHomePartnershipProps {
  sectionIndex: number;
  backgroundColor: string;
  imageWidth: string;
  partners: Partnership[];
}

export interface Partnership {
  partnerTitle: string;
  titleColor: string;
  partnerImageUrl: string;
  imageBackgroundColor: string;
  order: number;
  active: boolean;
}
