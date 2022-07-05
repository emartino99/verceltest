import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getLayout } from '../components/template';
import { Banner, Business, Clients, Courses, Hero, Partners } from '../components/organism';
import { SharepointResponse, iCoreBusiness, iCoreBusinessCard, IPartners, IClients, IClientsMainSettings, ICourses, ICoursesMainSettings } from '../models';
import { ENDPOINTS, get } from '../services';
import { getHeader } from './api/auth';
import { axiosParser, parseResults } from '../utils';

function Home({
  business,
  businessCard,
  partnersProps,
  clientsProps,
  clientsMainSettingsProps,
  coursesProps,
  coursesMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps> ){   

  const coreBusiness = parseResults<iCoreBusiness[]>(business) ;
  const coreBusinessCards = parseResults<iCoreBusinessCard[]>(businessCard);
  const partners = parseResults<IPartners[]>(partnersProps);
  const clients = parseResults<IClients[]>(clientsProps);
  const clientsMainSettings = parseResults<IClientsMainSettings[]>(clientsMainSettingsProps);
  const courses = parseResults<ICourses[]>(coursesProps);
  const coursesMainSettings = parseResults<ICoursesMainSettings[]>(coursesMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <Hero />
        <Banner />
        <Business coreBusiness={coreBusiness} coreBusinessCards={coreBusinessCards} />
        <Partners partners={partners} />
        <Clients clients={clients} clientsMainSettings={clientsMainSettings} />
        <Courses courses={courses} coursesMainSettings={coursesMainSettings} />
      </main>
    </>
  )
}

export default Home

Home.getLayout = getLayout


export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    businessResponse, 
    businessCardResponse,
    partnersResponse,
    clientsResponse,
    clientsMainSettingsResponse,
    coursesResponse,
    coursesMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<iCoreBusiness[]>>(ENDPOINTS.business, { headers }),
    get<SharepointResponse<iCoreBusinessCard[]>>(ENDPOINTS.businessCard, { headers }),
    get<SharepointResponse<IPartners[]>>(ENDPOINTS.partners, { headers }),
    get<SharepointResponse<IClients[]>>(ENDPOINTS.clients, { headers }),
    get<SharepointResponse<IClientsMainSettings[]>>(ENDPOINTS.clientsMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.courses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesMainSettings, { headers }),
  ])

  return {
    props: {
      business: axiosParser(businessResponse),
      businessCard: axiosParser(businessCardResponse),
      partnersProps: axiosParser(partnersResponse),
      clientsProps: axiosParser(clientsResponse),
      clientsMainSettingsProps: axiosParser(clientsMainSettingsResponse),
      coursesProps: axiosParser(coursesResponse),
      coursesMainSettingsProps: axiosParser(coursesMainSettingsResponse),
    }
  }
}
