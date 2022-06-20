import useSWR from "swr";
import { IFooterLinks } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useFooterLinkHook = () => {
    const { data: footerLinks, error } = useSWR<IFooterLinks[], Error>(ENDPOINTS.footer, getApi('footer'));
    return {
        footerLinks ,
        error 
    }
}