import useSWR from "swr";
import { IFooterLinks } from "../models";
import { get } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useFooterLinkHook = () => {
    const { data: footerLinks, error } = useSWR<IFooterLinks[], Error>(ENDPOINTS.footer, get);
    return {
        footerLinks,
        error
    }
}