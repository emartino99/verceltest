import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'HomeClientsPresentationWebPartStrings';
import HomeClientsPresentation from './components/HomeClientsPresentation';
import { IHomeClientsPresentationProps } from './components/IHomeClientsPresentationProps';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { setupConfiguration } from './service';

export interface IHomeClientsPresentationWebPartProps {
  text: string;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  backgroundColor: string;
  textColor: string;
  enableHrefButton: boolean;
  sectionIndex: number;
  context: WebPartContext;
  sp: SPRest;
}

export default class HomeClientsPresentationWebPart extends BaseClientSideWebPart<IHomeClientsPresentationWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IHomeClientsPresentationProps> = React.createElement(
      HomeClientsPresentation,
      {
        sectionIndex: this.properties.sectionIndex,
        text: this.properties.text,
        btnLabel: this.properties.btnLabel,
        btnUrl: this.properties.btnUrl,
        btnClass: this.properties.btnClass,
        backgroundColor: this.properties.backgroundColor,
        textColor: this.properties.textColor,
        enableHrefButton: this.properties.enableHrefButton,
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
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Section",
              isCollapsed: true,
              groupFields: [
                PropertyFieldNumber("sectionIndex", {
                  key: "sectionIndex",
                  label: "Section Index",
                  description: "Definisce l'ordine delle sezioni inserite per far funzionare lo scroll dinamico",
                  value: this.properties.sectionIndex ?? 0,
                  maxValue: 100,
                  minValue: 0,
                  disabled: false,

                }),
                PropertyPaneTextField('text', {
                  label: "Text",
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
                PropertyFieldColorPicker('textColor', {
                  label: 'textColor',
                  selectedColor: this.properties.textColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId2'
                })
              ]
            },
            {
              groupName: "Button",
              isCollapsed: true,
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
