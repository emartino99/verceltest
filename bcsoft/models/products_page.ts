import { ENDPOINTS_TYPE } from "../services";

export type IPageEndpoints = ENDPOINTS_TYPE

export interface IProductsPage {
    Title: string;
    id0: string;
    template: string;
    endpoints: string;
}
 
 
  
export interface PageEndpointsModel {
    position: number;    
    nameComponent: string;
    endpoint: IPageEndpoints;
    prop: string;
}
 
export interface PageConfigurationModel{
    nameComponent: string;
    [key: string]: any
}
 

/* 
    {
     "id": {
        <nome componente>: string
         <position>: number,
         endpoints: IPageEndpoints[],
         props: string[]
     }
*/ 
 