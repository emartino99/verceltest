import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'HomeCorsiCarouselWebPartStrings';
import HomeCorsiCarousel from './components/HomeCorsiCarousel';
import { IHomeCorsiCarouselProps } from './components/IHomeCorsiCarouselProps';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { CustomCollectionFieldType, PropertyFieldCollectionData } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { setupConfiguration } from './service';

export interface IHomeCorsiCarouselWebPartProps {
  sectionIndex: number;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonStyle: string;
  buttonLink: string;
  context: WebPartContext;
  sp: SPRest;
}

export default class HomeCorsiCarouselWebPart extends BaseClientSideWebPart<IHomeCorsiCarouselWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IHomeCorsiCarouselProps> = React.createElement(
      HomeCorsiCarousel,
      {
        sectionIndex: this.properties.sectionIndex,
        backgroundColor: this.properties.backgroundColor,
        titleColor: this.properties.titleColor,
        subtitleColor: this.properties.subtitleColor,
        title: this.properties.title,
        subtitle: this.properties.subtitle,
        buttonText: this.properties.buttonText,
        buttonStyle: this.properties.buttonStyle,
        buttonLink: this.properties.buttonLink,
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
    return Version.parse('1.2.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          displayGroupsAsAccordion:true,
          groups: [
            {
              groupName: "Section",
              isCollapsed: true,
              groupFields: [
                PropertyFieldNumber("sectionIndex", {
                  key: "sectionIndex",
                  label: "Section Index",
                  description: "Definisce l'ordine delle sezioni inserite per far funzionare lo scroll dinamico",
                  value: this.properties.sectionIndex ??0,
                  maxValue: 100,
                  minValue: 0,
                  disabled: false
                }),
                PropertyPaneTextField('title', {
                  label: "title",
                  multiline: false
                }),
                PropertyPaneTextField('subtitle', {
                  label: "subtitle",
                  multiline: true
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
                  label: 'textColor',
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
                PropertyFieldColorPicker('subtitleColor', {
                  label: 'textColor',
                  selectedColor: this.properties.subtitleColor,
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
              ]
            },
            {
              groupName: "Button",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('buttonText', {
                  label: "Button Text"
                }),
                PropertyPaneTextField('buttonLink', {
                  label: "Button Url",
                }),
                PropertyPaneDropdown('buttonStyle', {
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
