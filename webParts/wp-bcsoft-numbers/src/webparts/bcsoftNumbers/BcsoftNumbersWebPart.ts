import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { IListInfo, sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldFilePicker, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'BcsoftNumbersWebPartStrings';
import BcsoftNumbers from './components/BcsoftNumbers';
import { IBcsoftNumbersProps } from './components/IBcsoftNumbersProps';
import { getAvaiableLists, setupConfiguration } from './service/';

export interface IBcsoftNumbersWebPartProps {
  bcSoftNumersListId: string;
  backgroundColor: string;
  mainTitle: string;
  mainTitleColor: string;
  mainTitleSize: number;
  mainTitleWeight:string;
  mainDescription: string;
  mainDescriptionColor: string;
  mainDescriptionSize: number;
  mainDescriptionWeight:string;
  useImageBackground: boolean;
  useButton: boolean;
  btnLabel: string;
  btnClass?: string;
  btnUrl?: string;
  enableHrefButton: boolean;
  useBcSoftFactoryLogo: boolean;
  invertPosition: boolean;
  urlMedia: string;
  filePicker: IFilePickerResult;
  context: WebPartContext;
  sp: SPRest;
}

export default class BcsoftNumbersWebPart extends BaseClientSideWebPart<IBcsoftNumbersWebPartProps> {

  private bcsoftNumbersLists: IListInfo[] = [];

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {

    setupConfiguration(this.context, sp);
    this.getBcSoftNumbersLists();

    const element: React.ReactElement<IBcsoftNumbersProps> = React.createElement(
      BcsoftNumbers,
      {
        bcSoftNumersListId: this.properties.bcSoftNumersListId,
        backgroundColor: this.properties.backgroundColor,
        mainTitle: this.properties.mainTitle,
        mainTitleColor: this.properties.mainTitleColor,
        mainTitleSize: this.properties.mainTitleSize,
        mainTitleWeight:this.properties.mainTitleWeight,
        mainDescription: this.properties.mainDescription,
        mainDescriptionColor: this.properties.mainDescriptionColor,
        mainDescriptionSize: this.properties.mainDescriptionSize,
        mainDescriptionWeight: this.properties.mainDescriptionWeight,
        useImageBackground: this.properties.useImageBackground,
        useButton: this.properties.useButton,
        btnLabel: this.properties.btnLabel,
        btnClass: this.properties.btnClass,
        btnUrl: this.properties.btnUrl,
        enableHrefButton: this.properties.enableHrefButton,
        useBcSoftFactoryLogo: this.properties.useBcSoftFactoryLogo,
        invertPosition: this.properties.invertPosition,
        urlMedia: this.properties.urlMedia,
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

  protected async getBcSoftNumbersLists() {
    this.bcsoftNumbersLists = await getAvaiableLists(sp);
    this.context.propertyPane.refresh();
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
                PropertyPaneDropdown('bcSoftNumersListId', {
                  label: 'Choose the list to use',
                  options: this.bcsoftNumbersLists.map(listInfo => {
                    return {
                      key: listInfo.Id,
                      text: listInfo.Title
                    };
                  })
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
                PropertyPaneTextField('mainTitle', {
                  label: "Main title",
                  multiline: true
                }),
                PropertyFieldColorPicker('mainTitleColor', {
                  label: 'Main title color',
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
                  label: "Main title font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('mainTitleSize', {
                  label: "Main title font size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneTextField('mainDescription', {
                  label: "mainDescription",
                  multiline: true
                }),
                PropertyFieldColorPicker('mainDescriptionColor', {
                  label: 'Main description color',
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
                  label: "Main description font weight",
                  options: [{ key: "light", text: "Light" }, { key: "regular", text: "Regular" }, { key: "semibold", text: "Semi-Bold" }, { key: "bold", text: "Bold" }]
                }),
                PropertyPaneSlider('mainDescriptionSize', {
                  label: "Main description font size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1
                }),
                PropertyPaneCheckbox('useImageBackground', {
                  text: "Use an image as background",
                }),
                PropertyPaneCheckbox('invertPosition', {
                  text: "Invert the position of the elements",
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
              }),
              PropertyPaneCheckbox('useBcSoftFactoryLogo', {
                text: "Insert BC Soft factory logo",
              }),
              ]
            },
            {
              groupName: "Button",
              isCollapsed: false,
              groupFields: [
                PropertyPaneCheckbox('useButton', {
                  text: "Insert a button",
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
