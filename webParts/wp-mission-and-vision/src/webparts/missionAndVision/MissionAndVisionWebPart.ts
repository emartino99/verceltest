import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'MissionAndVisionWebPartStrings';
import MissionAndVision from './components/MissionAndVision';
import { IMissionAndVisionProps } from './components/IMissionAndVisionProps';

export interface IMissionAndVisionWebPartProps {
  backgroundColor: string;
  visionTitle: string;
  visionTitleColor: string;
  visionDescription: string;
  visionDescriptionColor: string;
  missionTitle: string;
  missionTitleColor: string;
  missionDescription: string;
  missionDescriptionColor: string;
}

export default class MissionAndVisionWebPart extends BaseClientSideWebPart<IMissionAndVisionWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IMissionAndVisionProps> = React.createElement(
      MissionAndVision,
      {
        backgroundColor: this.properties.backgroundColor,
        visionTitle: this.properties.visionTitle,
        visionTitleColor: this.properties.visionTitleColor,
        visionDescription: this.properties.visionDescription,
        visionDescriptionColor: this.properties.visionDescriptionColor,
        missionTitle: this.properties.missionTitle,
        missionTitleColor: this.properties.missionTitleColor,
        missionDescription: this.properties.missionDescription,
        missionDescriptionColor: this.properties.missionDescriptionColor,
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
                PropertyPaneTextField('visionTitle', {
                  label: "Vision title",
                  multiline: true
                }),
                PropertyFieldColorPicker('visionTitleColor', {
                  label: "Vision title color",
                  selectedColor: this.properties.visionTitleColor,
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
                PropertyPaneTextField('visionDescription', {
                  label: "Vision description",
                  multiline: true
                }),
                PropertyFieldColorPicker('visionDescriptionColor', {
                  label: "Vision description color",
                  selectedColor: this.properties.visionDescriptionColor,
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
                PropertyPaneTextField('missionTitle', {
                  label: "Mission title",
                  multiline: true
                }),
                PropertyFieldColorPicker('missionTitleColor', {
                  label: "Mission title color",
                  selectedColor: this.properties.missionTitleColor,
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
                PropertyPaneTextField('missionDescription', {
                  label: "Mission description",
                  multiline: true
                }),
                PropertyFieldColorPicker('missionDescriptionColor', {
                  label: "Mission description color",
                  selectedColor: this.properties.missionDescriptionColor,
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
            }
          ]
        }
      ]
    };
  }
}
