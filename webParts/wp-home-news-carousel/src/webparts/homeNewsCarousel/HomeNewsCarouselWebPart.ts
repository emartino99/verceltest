import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
} from '@microsoft/sp-property-pane';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'HomeNewsCarouselWebPartStrings';
import HomeNewsCarousel from './components/HomeNewsCarousel';
import { IHomeNewsCarouselProps } from './components/IHomeNewsCarouselProps';
import { setupConfiguration } from './service/';

export interface IHomeNewsCarouselWebPartProps { 
  title: string;
  description: string;
  descriptionUrl: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  shouldWorkFromList: boolean;
  context: WebPartContext;
  sp: SPRest;
}

export default class HomeNewsCarouselWebPart extends BaseClientSideWebPart<IHomeNewsCarouselWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IHomeNewsCarouselProps> = React.createElement(
      HomeNewsCarousel,
      {
        title: this.properties.title,
        description: this.properties.description,
        descriptionUrl: this.properties.descriptionUrl,
        backgroundColor: this.properties.backgroundColor,
        titleColor: this.properties.titleColor,
        descriptionColor: this.properties.descriptionColor,
        shouldWorkFromList: this.properties.shouldWorkFromList,
        context: this.context,
        sp: sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.1.0');
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
                  label: "title",
                  multiline: false
                }),
                PropertyPaneTextField('description', {
                  label: "description",
                  multiline: true
                }),
                PropertyPaneTextField('descriptionUrl', {
                  label: "descriptionUrl"
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
                PropertyFieldColorPicker('titleColor', {
                  label: 'titleColor',
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
                PropertyFieldColorPicker('descriptionColor', {
                  label: 'descriptionColor',
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
                PropertyPaneCheckbox('shouldWorkFromList', {
                  text: "get news from list"
                })
              ]
            }
          ]
        }
      ] 
    };
  }
}
