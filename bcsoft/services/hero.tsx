import useSWR from "swr";
import { IHeroMedia, IQuickLinks } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useHeroHooks = () => {
    const { data: quickLinks, error } = useSWR<IQuickLinks[], Error>(ENDPOINTS.herolinks, getApi('herolinks'));
    const { data: media, error: mediaError } = useSWR<IHeroMedia[], Error>(ENDPOINTS.hero, getApi('hero'));
    return {
        quickLinks,
        media,
        error: error || mediaError
    }
}