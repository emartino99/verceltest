import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { SPRest } from "@pnp/sp";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import * as strings from 'NavbarWebPartStrings';
import Navbar from './components/Navbar';
import { INavbarProps } from './components/INavbarProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { setupConfiguration } from './service/';

export interface INavbarWebPartProps {
  description: string;
  context: WebPartContext;
  sp: SPRest;
}

export default class NavbarWebPart extends BaseClientSideWebPart<INavbarWebPartProps> {

  public render(): void {

    setupConfiguration(this.context, sp);

    const element: React.ReactElement<INavbarProps> = React.createElement(
      Navbar,
      {
        description: this.description,
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
    return Version.parse('1.4.0');
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
