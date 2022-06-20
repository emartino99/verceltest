import useSWR from "swr";
import { iCoreBusiness } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useBusinessHook = () => {
    const { data: coreBusinessCards, error } = useSWR<iCoreBusiness[], Error>(ENDPOINTS.business, getApi('business'));
    return {
        coreBusinessCards,
        error
    }
}