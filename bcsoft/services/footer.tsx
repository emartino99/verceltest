import { useQuery } from "react-query";
import useSWR from "swr";
import { IFooterLinks } from "../models";
import { get } from "./axios";
import { ENDPOINTS } from "./endpoints";

const getFooter = ()=> fetch('./api').then(async res => {
    const r = await res.json();
    return r.d.results
})
export const useFooterLinkHook = () => {
    const { data: footerLinks, error } = useSWR<IFooterLinks[], Error>('./api', getFooter);
    return {
        footerLinks ,
        error 
    }
}