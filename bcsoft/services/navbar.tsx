import useSWR from "swr";
import { IMainLinks, ISubLinks } from "../models";
import { get, getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useNavLinkHook = () => {
    const { data: mainLinks, error: mainError } = useSWR<IMainLinks[], Error>(ENDPOINTS.mainmenu, getApi('mainmenu'));
    const { data: subLinks, error: subError } = useSWR<ISubLinks[]>(ENDPOINTS.submenu, getApi('submenu'));
    return {
        mainLinks,
        subLinks,
        error: mainError || subError
    }
}