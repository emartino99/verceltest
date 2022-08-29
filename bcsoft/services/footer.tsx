import useSWR from "swr";
import { IFooterLinks } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useFooterLinkHook = (skip?: boolean) => {
    const { data: footerLinks, error } = useSWR<IFooterLinks[], Error>(ENDPOINTS.footer, !skip ? getApi('footer'): null);
    return {
        footerLinks ,
        error 
    }
}