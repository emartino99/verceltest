import useSWR from "swr";
import { IQuickLinks } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useHeroHooks = () => {
    const { data: quickLinks, error } = useSWR<IQuickLinks[], Error>(ENDPOINTS.hero, getApi('hero'));
    return {
        quickLinks,
        error
    }
}