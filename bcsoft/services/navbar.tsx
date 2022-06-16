import useSWR from "swr";
import { IMainLinks, ISubLinks } from "../models";
import { get } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useNavLinkHook = () => {
    const { data: mainLinks, error: mainError } = useSWR<IMainLinks[], Error>(ENDPOINTS.mainmenu, get);
    const { data: subLinks, error: subError } = useSWR<ISubLinks[]>(ENDPOINTS.mainmenu, get);
    return {
        mainLinks,
        subLinks,
        error: mainError || subError
    }
}