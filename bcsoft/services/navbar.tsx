import useSWR from "swr";
import { IMainLinks, ISubLinks } from "../models";
import { get, getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useNavLinkHook = (skip?: boolean) => {
    const { data: mainLinks, error: mainError } = useSWR<IMainLinks[], Error>(ENDPOINTS.mainmenu, !skip ? getApi('mainmenu'): null);
    const { data: subLinks, error: subError } = useSWR<ISubLinks[]>(ENDPOINTS.submenu, !skip ? getApi('submenu'): null);
    return {
        mainLinks,
        subLinks,
        error: mainError || subError
    }
}