import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  WebPartContext,
} from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import {
  PropertyFieldColorPicker,
  PropertyFieldColorPickerStyle,
} from "@pnp/spfx-property-controls/lib/PropertyFieldColorPicker";
import * as strings from "PortalAndAppDevelopmentWebPartStrings";
import PortalAndAppDevelopment from "./components/PortalAndAppDevelopment";
import { IPortalAndAppDevelopmentProps } from "./components/IPortalAndAppDevelopmentProps";
import { setupConfiguration } from "./service";
import { SPRest } from "@pnp/sp";
import { sp } from '@pnp/sp/presets/all';

export interface IPortalAndAppDevelopmentWebPartProps {
  backgroundColor:string;
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight: string;
  description: string;
  descriptionColor: string;
  descriptionSize: number;
  descriptionWeight: string;
  context: WebPartContext;
  sp: SPRest;
}

export default class PortalAndAppDevelopmentWebPart extends BaseClientSideWebPart<IPortalAndAppDevelopmentWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IPortalAndAppDevelopmentProps> =
      React.createElement(PortalAndAppDevelopment, {
        backgroundColor: this.properties.backgroundColor,
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        titleWeight: this.properties.titleWeight,
        description: this.properties.description,
        descriptionColor: this.properties.descriptionColor,
        descriptionSize: this.properties.descriptionSize,
        descriptionWeight: this.properties.descriptionWeight,
        context: this.context,
        sp: sp,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldColorPicker("backgroundColor", {
                  label: "backgroundColor",
                  selectedColor: this.properties.backgroundColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: "Precipitation",
                  key: "colorFieldId2",
                }),
                PropertyPaneTextField("title", {
                  label: "titolo",
                }),
                PropertyFieldColorPicker("titleColor", {
                  label: "titleColor",
                  selectedColor: this.properties.titleColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: "Precipitation",
                  key: "colorFieldId2",
                }),
                PropertyPaneDropdown("titleWeight", {
                  label: "Font Weight",
                  options: [
                    { key: "light", text: "Light" },
                    { key: "regular", text: "Regular" },
                    { key: "semibold", text: "Semi-Bold" },
                    { key: "bold", text: "Bold" },
                  ],
                }),
                PropertyPaneSlider("titleSize", {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1,
                }),
                PropertyPaneTextField("description", {
                  label: "descrizione",
                }),
                PropertyFieldColorPicker("descriptionColor", {
                  label: "descriptionColor",
                  selectedColor: this.properties.descriptionColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: "Precipitation",
                  key: "colorFieldId2",
                }),
                PropertyPaneDropdown("descriptionWeight", {
                  label: "Font Weight",
                  options: [
                    { key: "light", text: "Light" },
                    { key: "regular", text: "Regular" },
                    { key: "semibold", text: "Semi-Bold" },
                    { key: "bold", text: "Bold" },
                  ],
                }),
                PropertyPaneSlider("descriptionSize", {
                  label: "Font Size (em)",
                  min: 1,
                  max: 10,
                  step: 0.1,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
