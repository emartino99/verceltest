import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import WpBcsoftLogoAboveFooter from './components/WpBcsoftLogoAboveFooter';
import { IWpBcsoftLogoAboveFooterProps } from './components/IWpBcsoftLogoAboveFooterProps';
import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IWpBcsoftLogoAboveFooterWebPartProps {
  title: string;
  titleColor: string;
  titleSize: number;
  titleWeight: string;
  backgroundColor: string;
}

export default class WpBcsoftLogoAboveFooterWebPart extends BaseClientSideWebPart<IWpBcsoftLogoAboveFooterWebPartProps> {

  protected onInit(): Promise<void> {
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IWpBcsoftLogoAboveFooterProps> = React.createElement(
      WpBcsoftLogoAboveFooter,
      {
        title: this.properties.title,
        titleColor: this.properties.titleColor,
        titleSize: this.properties.titleSize,
        titleWeight: this.properties.titleWeight,
        backgroundColor: this.properties.backgroundColor
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
            description: "Immagine Bcsoft con sottostante scritta"
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "settings",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: "Title"
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
                  key: 'colorFieldId'
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
              ]
            }
          ]
        }
      ]
    };
  }
}
