import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getLayout } from '../components/template';
import { Banner, Business, Clients, Courses, Hero, News, Partners } from '../components/organism';
import { SharepointResponse, iCoreBusiness, iCoreBusinessCard, IPartners, IClients, IClientsMainSettings, ICourses, ICoursesMainSettings, INews } from '../models';
import { ENDPOINTS, get } from '../services';
import { getHeader } from './api/auth';
import { axiosParser, parseResults } from '../utils';

function Home({
  business,
  businessCard,
  partnersProps,
  clientsProps,
  clientsMainSettingsProps,
  // test,
  coursesProps,
  coursesMainSettingsProps,
  newsProps
}: InferGetServerSidePropsType<typeof getServerSideProps> ){   
  // console.log("🚀 ~ file: index.tsx ~ line 57 ~ getServerSideProps ~ test", test)
  const coreBusiness = parseResults<iCoreBusiness[]>(business) ;
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
        {/* 
          [
            {webpart: 'hero', endpoint: 'hero'}
          ]
        */}
        <Hero />
        <Banner />
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
    businessResponse, 
    businessCardResponse,
    partnersResponse,
    clientsResponse,
    clientsMainSettingsResponse,
    // test,
    coursesResponse,
    coursesMainSettingsResponse,
    newsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<iCoreBusiness[]>>(ENDPOINTS.business, { headers }),
    get<SharepointResponse<iCoreBusinessCard[]>>(ENDPOINTS.businessCard, { headers }),
    get<SharepointResponse<IPartners[]>>(ENDPOINTS.partners, { headers }),
    get<SharepointResponse<IClients[]>>(ENDPOINTS.clients, { headers }),
    get<SharepointResponse<IClientsMainSettings[]>>(ENDPOINTS.clientsMainSettings, { headers }),
    // get<SharepointResponse<any[]>>(`https://bcsoftsrl.sharepoint.com/sites/BCSoft.net.test/_api/Web/Lists(guid'e94cfae5-f8a3-4713-a0fb-76dc70e9655a')/Items?$filter=PromotedState eq 2&$select=Title,Description,BannerImageUrl,FirstPublishedDate,FileRef`, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.courses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesMainSettings, { headers }),
    get<SharepointResponse<INews[]>>(ENDPOINTS.news, { headers }),
  ])
  {/* 
          [
            {webpart: 'hero', endpoint: 'hero'}
          ]
  */}
  // console.log("🚀 ~ file: index.tsx ~ line 58 ~ getServerSideProps ~ test", test)
  // https://bcsoftsrl.sharepoint.com/sites/BCSoft.net.test/_api/Web/GetFileByServerRelativePath(decodedurl='/sites/BCSoft.net.test/SitePages/Academy.aspx')
  return {
    props: {
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
