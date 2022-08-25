import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getLayout } from '../components/template';
import { Banner, Business, Clients, Courses, Hero, Locations, News, Partners } from '../components/organism';
import { 
    SharepointResponse, iCoreBusiness, iCoreBusinessCard, IPartners, IClients,
    IClientsMainSettings, ICourses, ICoursesMainSettings, INews, IBanner, IHeroMedia, IQuickLinks
} from '../models';
import { ENDPOINTS, get } from '../services';
import { getHeader } from './api/auth';
import { axiosParser, parseResults } from '../utils';

function Home({
  heroProps,
  heroLinksProps,
  bannerProps,
  business,
  businessCard,
  partnersProps,
  clientsProps,
  clientsMainSettingsProps,
  coursesProps,
  coursesMainSettingsProps,
  newsProps,
}: InferGetServerSidePropsType<typeof getServerSideProps> ){   
  const media = parseResults<IHeroMedia[]>(heroProps);
  const quickLinks = parseResults<IQuickLinks[]>(heroLinksProps);
  const bannerInfos = parseResults<IBanner[]>(bannerProps);
  const coreBusiness = parseResults<iCoreBusiness[]>(business);
  const coreBusinessCards = parseResults<iCoreBusinessCard[]>(businessCard);
  const partners = parseResults<IPartners[]>(partnersProps);
  const clients = parseResults<IClients[]>(clientsProps);
  const clientsMainSettings = parseResults<IClientsMainSettings[]>(clientsMainSettingsProps);
  const courses = parseResults<ICourses[]>(coursesProps);
  const coursesMainSettings = parseResults<ICoursesMainSettings[]>(coursesMainSettingsProps);
  const news = parseResults<INews[]>(newsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <Hero media={media} quickLinks={quickLinks} />
        <Banner bannerInfos={bannerInfos} />
        <Business coreBusiness={coreBusiness} coreBusinessCards={coreBusinessCards} />
        <Partners partners={partners} />
        <Clients clients={clients} clientsMainSettings={clientsMainSettings} />
        <Courses courses={courses} coursesMainSettings={coursesMainSettings} />
        <News news={news}/>
      </main>
    </>
  )
}

export default Home

Home.getLayout = getLayout


export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    heroResponse,
    heroLinksResponse,
    bannerResponse,
    businessResponse, 
    businessCardResponse,
    partnersResponse,
    clientsResponse,
    clientsMainSettingsResponse,
    coursesResponse,
    coursesMainSettingsResponse,
    newsResponse,
  ] = await Promise.allSettled([
    get<SharepointResponse<IHeroMedia[]>>(ENDPOINTS.hero, { headers }),
    get<SharepointResponse<IQuickLinks[]>>(ENDPOINTS.herolinks, { headers }),
    get<SharepointResponse<IBanner[]>>(ENDPOINTS.banner, { headers }),
    get<SharepointResponse<iCoreBusiness[]>>(ENDPOINTS.business, { headers }),
    get<SharepointResponse<iCoreBusinessCard[]>>(ENDPOINTS.businessCard, { headers }),
    get<SharepointResponse<IPartners[]>>(ENDPOINTS.partners, { headers }),
    get<SharepointResponse<IClients[]>>(ENDPOINTS.clients, { headers }),
    get<SharepointResponse<IClientsMainSettings[]>>(ENDPOINTS.clientsMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.courses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesMainSettings, { headers }),
    get<SharepointResponse<INews[]>>(ENDPOINTS.news, { headers }),
  ]);
  
  return {
    props: {
      heroProps: axiosParser(heroResponse),
      heroLinksProps: axiosParser(heroLinksResponse),
      bannerProps: axiosParser(bannerResponse),
      business: axiosParser(businessResponse),
      businessCard: axiosParser(businessCardResponse),
      partnersProps: axiosParser(partnersResponse),
      clientsProps: axiosParser(clientsResponse),
      clientsMainSettingsProps: axiosParser(clientsMainSettingsResponse),
      // test: axiosParser(test),
      coursesProps: axiosParser(coursesResponse),
      coursesMainSettingsProps: axiosParser(coursesMainSettingsResponse),
      newsProps: axiosParser(newsResponse),
    }
  }
}
