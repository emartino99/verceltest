import { PageEndpoints } from '../../models/products_page';
import Banner from './Banner';

export * from './AvaiableServices';
export {Banner} from './Banner';
export * from './BuildYourFuture';
export * from './Business';
export * from './CertificationsItems';
export * from './Cervellone';
export * from './Clients';
export * from './ClientsFeedbacks';
export * from './Consultants';
export * from './Courses';
export * from './CoursesAndMasters';
export * from './CoursesStructure';
export * from './CustomHero';
export * from './Design';
export * from './EstateDevelopmentTeam';
export * from './Footer';
export * from './Form';
export * from './Hero';
export * from './History';
export * from './InfoBanner';
export * from './JobOffers';
export * from './LaBellaEstateHero';
export * from './LatestNews';
export * from './LinkedinFeed';
export * from './Locations';
export * from './Navbar';
export * from './News';
export * from './Numbers';
export * from './OurServices';
export * from './Partners';
export * from './Products';
export * from './Quote';
export * from './ReEngineering';
export * from './Services';
export * from './ServicesItem';
export * from './ServicesProducts';
export * from './Strengths';
export * from './Vision';
export * from './YoutubeVideos';

interface ConfiguratiorType extends  Record<PageEndpoints, any>{}
export const getComponentFrom = (key: PageEndpoints) => {
    return ({
        banner: Banner
    } as ConfiguratiorType)[key] || null
}