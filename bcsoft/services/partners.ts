import useSWR from "swr";
import { IPartners } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const usePartnersHook = () => {

    const { data: partners, error: error } = useSWR<IPartners[], Error>(ENDPOINTS.partners, getApi('partners'));

    return {
        partners,
        error
    }
};
