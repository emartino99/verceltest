export type headerStyle = {
    alignItems?: string;
    justifyContent?: string;
    width?: string;
}

export type textStyle = {
    color?: string;
    fontSize?: string;
    width?: string;
    fontWeight?: string;
    posistion?: string;
    top?: string;
}

export type card = {
    height?: string;
    width?: string;
    minHeight?: string;
    backgroundColor?: string;
}

export type image = {
    height?: string;
    width?: string;
}

export type section = {
    height?: string;
    width?: string;
    backgroundColor?: string;
    flexFlow?: string;
}
export interface ISharepointStyle {
    headerStyle?: headerStyle;
    titleStyle?: textStyle;
    descriptionStyle?: textStyle;
    subtitleStyle?: textStyle;
    backgroundImageOpacity?: boolean;
    backgroundColor?: string;
    cardStyle: card;
    imageStyle: image;
    sectionStyle: section;
}