import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldFilePicker, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import CustomHero from './components/CustomHero';
import { ICustomHeroProps } from './components/ICustomHeroProps';

export interface ICustomHeroWebPartProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight: string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight: string;
  textAlign: string;
  backgroundColor: string;
  useBcsoftLogo: boolean;
  useImageAsBackground: boolean;
  urlMedia: string;
  useArrowButton: boolean;
  useBcButton: boolean;
  buttonAlign: string;
  buttonDescription: string;
  buttonDescriptionWeight: string;
  buttonDescriptionColor: string;
  buttonDescriptionSize: number;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  filePicker: IFilePickerResult;
}

export default class CustomHeroWebPart extends BaseClientSideWebPart<ICustomHeroWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ICustomHeroProps> = React.createElement(
      CustomHero,
      {
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        titleWeight: this.properties.titleWeight,
        description: this.properties.description,
        descriptionColor: this.properties.descriptionColor,
        descriptionSize: this.properties.descriptionSize,
        descriptionWeight: this.properties.descriptionWeight,
        textAlign: this.properties.textAlign,
        backgroundColor: this.properties.backgroundColor,
        useImageAsBackground: this.properties.useImageAsBackground,
        useBcsoftLogo: this.properties.useBcsoftLogo,
        urlMedia: this.properties.urlMedia,
        useArrowButton: this.properties.useArrowButton,
        useBcButton: this.properties.useBcButton,
        buttonAlign: this.properties.buttonAlign,
        buttonDescription: this.properties.buttonDescription,
        buttonDescriptionWeight: this.properties.buttonDescriptionWeight,
        buttonDescriptionColor: this.properties.buttonDescriptionColor,
        buttonDescriptionSize: this.properties.buttonDescriptionSize,
        btnLabel: this.properties.btnLabel,
        btnClass: this.properties.btnClass,
        btnUrl: this.properties.btnUrl,
        enableHrefButton: this.properties.enableHrefButton,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Custom hero settings'
          },
          groups: [
            {
              groupName: 'Main settings',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: "Title",
                  multiline: true
                }),
                PropertyFieldColorPicker('titleColor', {
                  label: 'Title color',
                  selectedColor: this.properties.titleColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId2'
                }),
                PropertyPaneDropdown('titleWeight', {
                  label: "Title font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('titleSize', {
                  label: "Title font size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneTextField('description', {
                  label: "description",
                  multiline: true
                }),
                PropertyFieldColorPicker('descriptionColor', {
                  label: 'description color',
                  selectedColor: this.properties.descriptionColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId2'
                }),
                PropertyPaneDropdown('descriptionWeight', {
                  label: "Description font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('descriptionSize', {
                  label: "Description font size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneDropdown('textAlign', {
                  label: "Justify text",
                  options: [{ key: "start", text: "Left" }, { key: "center", text: "Center" }, { key: "end", text: "Right" }]
                }),
                PropertyFieldColorPicker('backgroundColor', {
                  label: 'Background color',
                  selectedColor: this.properties.backgroundColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId1'
                }),
                PropertyFieldFilePicker('filePicker', {
                  context: this.context as any,
                  filePickerResult: this.properties.filePicker,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.urlMedia = e.fileAbsoluteUrl; this.properties.filePicker = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.urlMedia = e.fileAbsoluteUrl; this.properties.filePicker = e; },
                  key: "filePickerId",
                  buttonLabel: "Seleziona",
                  label: "Background",            
              }),
              PropertyPaneCheckbox('useImageAsBackground', {
                text: "Use an image as background",
              }),
              PropertyPaneCheckbox('useBcsoftLogo', {
                text: "Insert bcsoft logo",
              }),
              PropertyPaneCheckbox('useArrowButton', {
                text: "Use arrow button",
              }),
              PropertyPaneCheckbox('useBcButton', {
                text: "Use bcsoft button",
              }),
              PropertyPaneDropdown('buttonAlign', {
                label: "Justify button",
                options: [{ key: "start", text: "Left" }, { key: "center", text: "Center" }, { key: "end", text: "Right" }]
              }),
              PropertyPaneTextField('buttonDescription', {
                label: "text showed aside or behind the button",
                multiline: true
              }),
              PropertyFieldColorPicker('buttonDescriptionColor', {
                label: 'Button description color',
                selectedColor: this.properties.titleColor,
                onPropertyChange: this.onPropertyPaneFieldChanged,
                properties: this.properties,
                disabled: false,
                debounce: 1000,
                isHidden: false,
                alphaSliderHidden: true,
                style: PropertyFieldColorPickerStyle.Full,
                iconName: 'Precipitation',
                key: 'colorFieldId2'
              }),
              PropertyPaneDropdown('buttonDescriptionWeight', {
                label: "Button description font weight",
                options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
              }),
              PropertyPaneSlider('buttonDescriptionSize', {
                label: "Button description font size (em)",
                min: 1,
                max: 10,
                step: 0.1
              }),
              ]
            },
            {
              groupName: "Button",
              groupFields: [
                PropertyPaneTextField('btnLabel', {
                  label: "Button Text"
                }),
                PropertyPaneCheckbox('enableHrefButton', {
                  text: "Enable Link Button",
                }),
                PropertyPaneTextField('btnUrl', {
                  label: "Button Url",
                  disabled: this.properties.enableHrefButton === false || this.properties.enableHrefButton === null
                }),
                PropertyPaneDropdown('btnClass', {
                  label: "Button Class",
                  options: [],
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
