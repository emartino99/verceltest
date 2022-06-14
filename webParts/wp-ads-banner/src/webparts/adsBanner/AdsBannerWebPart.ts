import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AdsBannerWebPartStrings';
import AdsBanner from './components/AdsBanner';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { IAdsBannerProps } from './components/IAdsBannerProps';

export interface IAdsBannerWebPartProps {
  backgroundColor: string;
  adsBannerText: string;
  adsBannerTextWeight: string;
  adsBannerTextColor: string;
  adsBannerLinkText: string;
  adsBannerLinkTextWeight: string;
  adsBannerLinkTextColor: string;
  adsBannerLinkUrl: string;
}

export default class AdsBannerWebPart extends BaseClientSideWebPart<IAdsBannerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAdsBannerProps> = React.createElement(
      AdsBanner,
      {
        backgroundColor: this.properties.backgroundColor,
        adsBannerText: this.properties.adsBannerText,
        adsBannerTextWeight: this.properties.adsBannerTextWeight,
        adsBannerTextColor: this.properties.adsBannerTextColor,
        adsBannerLinkText: this.properties.adsBannerLinkText,
        adsBannerLinkTextWeight: this.properties.adsBannerLinkTextWeight,
        adsBannerLinkTextColor: this.properties.adsBannerLinkTextColor,
        adsBannerLinkUrl: this.properties.adsBannerLinkUrl,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.3.0');
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
                PropertyPaneTextField('adsBannerText', {
                  label: 'adsBannerText',
                }),
                PropertyPaneDropdown('adsBannerTextWeight', {
                  label: "Banner text font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyFieldColorPicker('adsBannerTextColor', {
                  label: 'adsBannerTextColor',
                  selectedColor: this.properties.adsBannerTextColor,
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
                PropertyPaneTextField('adsBannerLinkText', {
                  label: 'adsBannerLinkText',
                }),
                PropertyPaneDropdown('adsBannerLinkTextWeight', {
                  label: "Banner link text font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyFieldColorPicker('adsBannerLinkTextColor', {
                  label: 'adsBannerLinkTextColor',
                  selectedColor: this.properties.adsBannerLinkTextColor,
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
                PropertyPaneTextField('adsBannerLinkUrl', {
                  label: 'adsBannerLinkUrl',
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
