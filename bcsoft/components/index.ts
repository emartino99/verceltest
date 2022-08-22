import { Banner } from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        Banner: Banner
    } as ConfiguratiorType)[key] || null
}