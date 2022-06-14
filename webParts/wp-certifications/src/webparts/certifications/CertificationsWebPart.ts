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
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'CertificationsWebPartStrings';
import Certifications from './components/Certifications';
import { ICertificationsProps } from './components/ICertificationsProps';

export interface ICertificationsWebPartProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight:string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight:string;
  backgroundColor: string;
  textAlign: string;
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

export default class CertificationsWebPart extends BaseClientSideWebPart<ICertificationsWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ICertificationsProps> = React.createElement(
      Certifications,
      {
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        titleWeight: this.properties.titleWeight,
        description: this.properties.description,
        descriptionColor: this.properties.descriptionColor,
        descriptionSize: this.properties.descriptionSize,
        descriptionWeight: this.properties.descriptionWeight,
        backgroundColor: this.properties.backgroundColor,
        useCertificationsQuality: this.properties.useCertificationsQuality,
        useCertificationsTechnical: this.properties.useCertificationsTechnical,
        useCertificationsSecurity: this.properties.useCertificationsSecurity,
        textAlign: this.properties.textAlign,
        useButton: this.properties.useButton,
        btnLabel: this.properties.btnLabel,
        btnClass: this.properties.btnClass,
        btnUrl: this.properties.btnUrl,
        enableHrefButton: this.properties.enableHrefButton,
        invertPosition: this.properties.invertPosition
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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
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
                  label: "Description",
                  multiline: true
                }),
                PropertyFieldColorPicker('descriptionColor', {
                  label: 'Description color',
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
                  label: "Justify Text",
                  options: [{ key: "left", text: "Left" }, { key: "center", text: "Center" }, { key: "right", text: "Right" }]
                }),
                PropertyFieldColorPicker('backgroundColor', {
                  label: 'backgroundColor',
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
                PropertyPaneCheckbox('useCertificationsQuality', {
                  text: "Enable Certifications quality image",
                  disabled: this.properties.useCertificationsTechnical === true || this.properties.useCertificationsTechnical === null ||
                            this.properties.useCertificationsSecurity === true || this.properties.useCertificationsSecurity === null
                }),
                PropertyPaneCheckbox('useCertificationsTechnical', {
                  text: "Enable Certifications technical image",
                  disabled: this.properties.useCertificationsQuality === true || this.properties.useCertificationsQuality === null ||
                            this.properties.useCertificationsSecurity === true || this.properties.useCertificationsSecurity === null
                }),
                PropertyPaneCheckbox('useCertificationsSecurity', {
                  text: "Enable Certifications security",
                  disabled: this.properties.useCertificationsQuality === true || this.properties.useCertificationsQuality === null ||
                            this.properties.useCertificationsTechnical === true || this.properties.useCertificationsTechnical === null
                }),
                PropertyPaneCheckbox('invertPosition', {
                  text: "Invert position",
                }),
              ]
            },
            {
              groupName: "Button",
              groupFields: [
                PropertyPaneCheckbox('useButton', {
                  text: "Enable Button",
                }),
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
