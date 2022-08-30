export interface style {
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    posistion?: string;
    top?: string;
    height?: string;
    minHeight?: string;
    backgroundColor?: string;
    flexFlow?: string;
    borderRight: string;
}
export interface ISharepointStyle {
    headerStyle?: style;
    titleStyle?: style;
    descriptionStyle?: style;
    subtitleStyle?: style;
    backgroundImageOpacity?: boolean;
    backgroundColor?: string;
    cardStyle?: style;
    imageStyle?: style;
    sectionStyle?: style;
    flexFlow?: string;
    leftBorder?: style;
    rightBorder?: style;
    border?: style;
}