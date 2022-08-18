import { ENDPOINTS_TYPE } from "../services";

export type PageEndpoints = ENDPOINTS_TYPE

export interface IProductsPage {
    Title: string;
    id: string;
    template: string;
    endpoints: Record<PageEndpoints, number>
}