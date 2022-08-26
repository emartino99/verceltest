import { 
    AppDescription,
    Cervellone, 
    Courses,
    CoursesAndMasters,
    CoursesStructure, 
    CustomHero, 
    EstateDevelopmentTeam, 
    Form, 
    Info,
    Products, 
    Quote,
    Results, 
    Services, 
    YoutubeVideos, 
} from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        AppDescription: AppDescription,
        Cervellone: Cervellone,
        Courses: Courses,
        CoursesAndMasters: CoursesAndMasters,
        CoursesStructure: CoursesStructure,
        CustomHero: CustomHero,
        EstateDevelopmentTeam: EstateDevelopmentTeam,
        Form: Form,
        Info: Info,
        Products: Products,
        Quote: Quote,
        Results: Results,
        Services: Services,
        YoutubeVideos: YoutubeVideos,
    } as ConfiguratiorType)[key] || null
}