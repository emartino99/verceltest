import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import HeroHomePage from './components/HeroHomePage';
import { IHeroHomePageProps } from './components/IHeroHomePageProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { setupConfiguration } from './service';

export interface IHeroHomePageWebPartProps {
  title: string;
  titleAlign: string;
  titleSize: number;
  titleWeight: string;
  textColor: string;
  alignElements: string;
  urlMedia: string;
  videoPlayer: boolean;
  filePicker: IFilePickerResult;
  context: WebPartContext;
  sp: SPRest;
}

export default class HeroHomePageWebPart extends BaseClientSideWebPart<IHeroHomePageWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<IHeroHomePageProps> = React.createElement(
      HeroHomePage,
      {
        title: this.properties.title,
        titleAlign: this.properties.titleAlign,
        titleSize: this.properties.titleSize,
        titleWeight: this.properties.titleWeight,
        alignElements: this.properties.alignElements,
        textColor: this.properties.textColor,
        urlMedia: this.properties.urlMedia,
        videoPlayer: this.properties.videoPlayer,
        context: this.context,
        sp: sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    return super.onInit();
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
            description: "Sezione Hero pagina iniziale"
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Testo",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: "Title"
                }),
                PropertyPaneDropdown('titleAlign', {
                  label: "Justify Text",
                  options: [{ key: "left", text: "Left" }, { key: "center", text: "Center" }, { key: "right", text: "Right" }]
                }),
                PropertyPaneDropdown('alignElements', {
                  label: "Justify Text Container",
                  options: [{ key: "start", text: "Left" }, { key: "center", text: "Center" }, { key: "end", text: "Right" }]
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
                PropertyFieldColorPicker('textColor', {
                  label: 'Color',
                  selectedColor: this.properties.textColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                })
              ]
            },
            {
              groupName: "Media",
              isCollapsed: true,
              groupFields: [
                PropertyPaneCheckbox('videoPlayer', {
                  text:"Video",
                  checked: this.properties.videoPlayer,
                  disabled: this.properties.urlMedia === "" || this.properties.urlMedia == null
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
            }
          ]
        }
      ]
    };
  }
}
