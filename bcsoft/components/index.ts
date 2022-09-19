import { 
    AppDescription,
    Benefits,
    CertificationsItems,
    Cervellone,
    Courses,
    CoursesAndMasters,
    CoursesStructure,
    CustomHero,
    EstateDevelopmentTeam,
    Form,
    Info,
    LinkedinFeed,
    News,
    NewsDetails,
    Products,
    Quote,
    Results,
    Services,
    YoutubeVideos
} from "./organism"

interface ConfiguratiorType extends Record<string, any> { }
export const getComponentFrom = (key: string) => {
    return ({
        AppDescription: AppDescription,
        Benefits: Benefits,
        CertificationsItems: CertificationsItems,
        Cervellone: Cervellone,
        Courses: Courses,
        CoursesAndMasters: CoursesAndMasters,
        CoursesStructure: CoursesStructure,
        CustomHero: CustomHero,
        EstateDevelopmentTeam: EstateDevelopmentTeam,
        Form: Form,
        Info: Info,
        LinkedinFeed,
        News: News,
        NewsDetails,
        Products: Products,
        Quote: Quote,
        Results: Results,
        Services: Services,
        YoutubeVideos: YoutubeVideos
    } as ConfiguratiorType)[key] || null
}