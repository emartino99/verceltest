import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import HomeCoreBusiness from './components/HomeCoreBusiness';
import { IHomeCoreBusinessProps } from './components/IHomeCoreBusinessProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { setupConfiguration } from './service';

export interface IHomeCoreBusinessWebPartProps {
  sectionIndex: number;
  title: string;
  titleColor:string;
  titleSize: string;
  subtitle: string;
  subtitleColor:string;
  subtitleSize: string;
  cardTextSize: string;
  context: WebPartContext;
  sp: SPRest;
}

export default class HomeCoreBusinessWebPart extends BaseClientSideWebPart<IHomeCoreBusinessWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IHomeCoreBusinessProps> = React.createElement(
      HomeCoreBusiness,
      {
        sectionIndex: this.properties.sectionIndex,
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        subtitle: this.properties.subtitle,
        subtitleColor: this.properties.subtitleColor,
        subtitleSize: this.properties.subtitleSize,
        cardTextSize: this.properties.cardTextSize,
        context: this.context,
        sp: sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected onInit(): Promise<void> {
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.3.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: ""
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Title",
              isCollapsed: true,

              groupFields: [
                PropertyFieldNumber("sectionIndex", {
                  key: "sectionIndex",
                  label: "Section Index",
                  description: "Definisce l'ordine delle sezioni inserite per far funzionare lo scroll dinamico",
                  value: this.properties.sectionIndex ?? 0,
                  maxValue: 100,
                  minValue: 0,
                  disabled: false
                }),
                PropertyPaneTextField('title', {
                  label: "Title"
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
                  key: 'colorFieldId1'
                }),
                PropertyPaneSlider('titleSize', {
                  label: "title Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneTextField('subtitle', {
                  label: "Subtitle",
                  multiline: true,

                }),
                PropertyFieldColorPicker('subtitleColor', {
                  label: 'subtitleColor',
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
                PropertyPaneSlider('subtitleSize', {
                  label: "subtitle Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneSlider('cardTextSize', {
                  label: "card text Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
