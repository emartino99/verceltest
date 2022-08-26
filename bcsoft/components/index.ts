import { 
    CustomHero, Cervellone, 
    EstateDevelopmentTeam, Products, 
    YoutubeVideos, AppDescription,
    Services, Quote,
    Results, Info
} from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        AppDescription: AppDescription,
        Cervellone: Cervellone,
        CustomHero: CustomHero,
        EstateDevelopmentTeam: EstateDevelopmentTeam,
        Info: Info,
        Products: Products,
        Quote: Quote,
        Results: Results,
        Services: Services,
        YoutubeVideos: YoutubeVideos,
    } as ConfiguratiorType)[key] || null
}