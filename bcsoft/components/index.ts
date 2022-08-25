import { 
    CustomHero, Cervellone, 
    EstateDevelopmentTeam, Products, 
    YoutubeVideos, AppDescription,
    Services, Quote
} from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        AppDescription: AppDescription,
        Cervellone: Cervellone,
        CustomHero: CustomHero,
        EstateDevelopmentTeam: EstateDevelopmentTeam,
        Products: Products,
        Services: Services,
        YoutubeVideos: YoutubeVideos,
        Quote: Quote
    } as ConfiguratiorType)[key] || null
}