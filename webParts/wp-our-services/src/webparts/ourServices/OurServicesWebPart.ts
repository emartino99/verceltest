import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'OurServicesWebPartStrings';
import OurServices from './components/OurServices';
import { IOurServicesProps } from './components/IOurServicesProps';
import { setupConfiguration } from './service/';

export interface IOurServicesWebPartProps {
  mainTitle: string;
  mainTitleColor: string;
  mainTitleSize: number;
  mainTitleWeight:string;
  mainDescription: string;
  mainDescriptionColor: string;
  mainDescriptionSize: number;
  mainDescriptionWeight:string;
  btnLabel: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  SviluppoSoftwarebtnLabel: string;
  SviluppoSoftwarebtnUrl?: string;
  SviluppoSoftwareenableHrefButton: boolean;
  FormazionebtnLabel: string;
  FormazionebtnUrl?: string;
  FormazioneenableHrefButton: boolean;
  context: WebPartContext;
  sp: SPRest;
}

export default class OurServicesWebPart extends BaseClientSideWebPart<IOurServicesWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IOurServicesProps> = React.createElement(
      OurServices,
      {
        mainTitle: this.properties.mainTitle,
        mainTitleColor: this.properties.mainTitleColor,
        mainTitleSize: this.properties.mainTitleSize,
        mainTitleWeight:this.properties.mainTitleWeight,
        mainDescription: this.properties.mainDescription,
        mainDescriptionColor: this.properties.mainDescriptionColor,
        mainDescriptionSize: this.properties.mainDescriptionSize,
        mainDescriptionWeight:this.properties.mainDescriptionWeight,
        btnLabel: this.properties.btnLabel,
        btnUrl: this.properties.btnUrl,
        enableHrefButton: this.properties.enableHrefButton,
        SviluppoSoftwarebtnLabel: this.properties.SviluppoSoftwarebtnLabel,
        SviluppoSoftwarebtnUrl: this.properties.SviluppoSoftwarebtnUrl,
        SviluppoSoftwareenableHrefButton: this.properties.SviluppoSoftwareenableHrefButton,
        FormazionebtnLabel: this.properties.FormazionebtnLabel,
        FormazionebtnUrl: this.properties.FormazionebtnUrl,
        FormazioneenableHrefButton: this.properties.FormazioneenableHrefButton,
        context: this.context,
        sp: sp,

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
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: 'Main settings',
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('mainTitle', {
                  label: 'insert title'
                }),
                PropertyFieldColorPicker('mainTitleColor', {
                  label: 'mainTitleColor',
                  selectedColor: this.properties.mainTitleColor,
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
                PropertyPaneDropdown('mainTitleWeight', {
                  label: "Font Weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('mainTitleSize', {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneTextField('mainDescription', {
                  label: 'insert description'
                }),
                PropertyFieldColorPicker('mainDescriptionColor', {
                  label: 'mainDescriptionColor',
                  selectedColor: this.properties.mainDescriptionColor,
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
                PropertyPaneDropdown('mainDescriptionWeight', {
                  label: "Font Weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('mainDescriptionSize', {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
              ]
            },
            {
              groupName: "Consulenza button",
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
                })
              ]
            },
            {
              groupName: "Sviluppo software button",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('SviluppoSoftwarebtnLabel', {
                  label: "Button Text"
                }),
                PropertyPaneCheckbox('SviluppoSoftwareenableHrefButton', {
                  text: "Enable Link Button",
                }),
                PropertyPaneTextField('SviluppoSoftwarebtnUrl', {
                  label: "Button Url",
                  disabled: this.properties.SviluppoSoftwareenableHrefButton === false || this.properties.SviluppoSoftwareenableHrefButton === null
                })
              ]
            },
            {
              groupName: "Formazione button",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('FormazionebtnLabel', {
                  label: "Button Text"
                }),
                PropertyPaneCheckbox('FormazioneenableHrefButton', {
                  text: "Enable Link Button",
                }),
                PropertyPaneTextField('FormazionebtnUrl', {
                  label: "Button Url",
                  disabled: this.properties.FormazioneenableHrefButton === false || this.properties.FormazioneenableHrefButton === null
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
