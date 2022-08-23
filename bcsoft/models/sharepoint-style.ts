export type headerStyle = {
    alignItems?: string;
    justifyContent?: string;
    width?: string;
}

export type textStyle = {
    color?: string;
    fontSize?: string;
    width?: string;
}

export type imageOpacity = boolean;

export interface ISharepointStyle {
    headerStyle?: headerStyle,
    titleStyle?: textStyle,
    descriptionStyle?: textStyle,
    imageOpacity?: imageOpacity
}