import { CustomHero, Cervellone, EstateDevelopmentTeam, Products } from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        CustomHero: CustomHero,
        Cervellone: Cervellone,
        EstateDevelopmentTeam: EstateDevelopmentTeam,
        Products: Products
    } as ConfiguratiorType)[key] || null
}