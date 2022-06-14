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
import WpJoinTheTeam from './components/WpJoinTheTeam';
import { IWpJoinTheTeamProps } from './components/IWpJoinTheTeamProps';

export interface IWpJoinTheTeamWebPartProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight:string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight:string;
  backgroundColor: string;
  urlMedia: string;
  filePicker: IFilePickerResult;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
}

export default class WpJoinTheTeamWebPart extends BaseClientSideWebPart<IWpJoinTheTeamWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IWpJoinTheTeamProps> = React.createElement(
      WpJoinTheTeam,
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
        urlMedia: this.properties.urlMedia,
        btnLabel: this.properties.btnLabel,
        btnClass: this.properties.btnClass,
        btnUrl: this.properties.btnUrl,
        enableHrefButton: this.properties.enableHrefButton
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
            description: 'Join the team settings'
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
