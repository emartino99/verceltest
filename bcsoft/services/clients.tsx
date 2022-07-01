import useSWR from "swr";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useClientsHook = () => {

    const { data: clients, error: error } = useSWR<[], Error>(ENDPOINTS.clients, getApi('clients'));

    return {
        clients,
        error
    }
};
