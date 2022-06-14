import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration, PropertyPaneSlider,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'HomePartnershipWebPartStrings';
import HomePartnership from './components/HomePartnership';
import { IHomePartnershipProps, Partnership } from './components/IHomePartnershipProps';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { PropertyFieldCollectionData, CustomCollectionFieldType, ICustomDropdownOption } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

export interface IHomePartnershipWebPartProps {
  sectionIndex: number;
  backgroundColor: string;
  imageWidth: string;
  partners: Partnership[];
}

export default class HomePartnershipWebPart extends BaseClientSideWebPart<IHomePartnershipWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHomePartnershipProps> = React.createElement(
      HomePartnership,
      {
        sectionIndex: this.properties.sectionIndex,
        backgroundColor: this.properties.backgroundColor,
        imageWidth: this.properties.imageWidth,
        partners: this.properties.partners
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
                  value: this.properties.sectionIndex,
                  maxValue: 100,
                  minValue: 0,
                  disabled: false
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
                  key: 'colorFieldId'
                }),
                PropertyPaneSlider('imageWidth', {
                  label: "image width (em)",
                  min: 1,
                  max: 100,
                  step: 1
                }),
              ]
            },
            {
              groupName: "Partners",
              isCollapsed: true,
              groupFields: [
                PropertyFieldCollectionData("partners", {
                  key: "linkItemList",
                  label: "Navbar Links",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Edit Partners",
                  value: this.properties.partners,
                  fields: [
                    {
                      id: "partnerTitle",
                      title: "partnerTitle",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "titleColor",
                      title: "titleColor",
                      type: CustomCollectionFieldType.string,
                      required: false
                    },
                    {
                      id: "partnerImageUrl",
                      title: "partnerImageUrl",
                      type: CustomCollectionFieldType.string,
                      required: false
                    },
                    {
                      id: "imageBackgroundColor",
                      title: "imageBackgroundColor",
                      type: CustomCollectionFieldType.string,
                      required: false
                    },
                    {
                      id: "order",
                      title: "order",
                      type: CustomCollectionFieldType.number,
                      required: false
                    },
                    {
                      id: "active",
                      title: "active",
                      type: CustomCollectionFieldType.boolean,
                      required: false
                    }
                  ],
                  disabled: false
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
