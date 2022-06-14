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
import ContactUsBanner from './components/ContactUsBanner';
import { IContactUsBannerProps } from './components/IContactUsBannerProps';
import { TooltipHost } from 'office-ui-fabric-react';

export interface IContactUsBannerWebPartProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight:string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight:string;
  textAlign: string;
  backgroundColor: string;
  changeLayoutDirection: boolean;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
}

export default class ContactUsBannerWebPart extends BaseClientSideWebPart<IContactUsBannerWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IContactUsBannerProps> = React.createElement(
      ContactUsBanner,
      {
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        titleWeight:this.properties.titleWeight,
        description: this.properties.description,
        descriptionColor: this.properties.descriptionColor,
        descriptionSize: this.properties.descriptionSize,
        descriptionWeight:this.properties.descriptionWeight,
        textAlign: this.properties.textAlign,
        backgroundColor: this.properties.backgroundColor,
        changeLayoutDirection: this.properties.changeLayoutDirection,
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
            description: 'Settings'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "settings",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: "title",
                  multiline: true
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
                PropertyPaneDropdown('titleWeight', {
                  label: "Font Weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('titleSize', {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneTextField('description', {
                  label: "description",
                  multiline: true
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
                PropertyPaneDropdown('descriptionWeight', {
                  label: "Font Weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('descriptionSize', {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
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
                PropertyPaneDropdown('textAlign', {
                  label: "Justify Text",
                  options: [{ key: "left", text: "Left" }, { key: "center", text: "Center" }, { key: "right", text: "Right" }]
                }),
                PropertyPaneCheckbox('changeLayoutDirection', {
                  text: "Switch from row to column",
                }),
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
