import useSWR from "swr";
import { iCoreBusiness, iCoreBusinessCard } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useBusinessHook = () => {
    const { data: coreBusinessCards, error } = useSWR<iCoreBusinessCard[], Error>(ENDPOINTS.businessCard, getApi('businessCard'));
    const { data: coreBusiness, error: coreBusinessError } = useSWR<iCoreBusiness[], Error>(ENDPOINTS.business, getApi('business'));
    return {
        coreBusiness,
        coreBusinessCards,
        error: error || coreBusinessError
    }
}