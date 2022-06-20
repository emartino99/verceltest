import axios from "axios"; 
import { ENDPOINTS_TYPE } from "./endpoints";

export const getApi = (endpoint: ENDPOINTS_TYPE) => () => fetch(`./api?endpoint=${endpoint}`).then(async res => {
    const r = await res.json();
    return r.d.results
})
export const get = (url: string) => axios.get(url).then(res => res.data)

 