import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getLayout } from '../components/template';
import { Banner, Business, Clients, Hero, Partners } from '../components/organism';
import { SharepointResponse, iCoreBusiness, iCoreBusinessCard, IPartners, IClients, IClientsMainSettings } from '../models';
import { ENDPOINTS, get } from '../services';
import { getHeader } from './api/auth';
import { axiosParser, parseResults } from '../utils';

function Home({
  business,
  businessCard,
  partnersProps,
  clientsProps,
  clientsMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps> ){   

  const coreBusiness = parseResults<iCoreBusiness[]>(business) ;
  const coreBusinessCards = parseResults<iCoreBusinessCard[]>(businessCard);
  const partners = parseResults<IPartners[]>(partnersProps);
  const clients = parseResults<IClients[]>(clientsProps);
  const clientsMainSettings = parseResults<IClientsMainSettings[]>(clientsMainSettingsProps);
 
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
      </main>
    </>
  )
}

export default Home

Home.getLayout = getLayout


export const getServerSideProps = async () => {
  
  const headers = await getHeader();
  // page - id -

  // => configurazione -> lists =>   [0] => endpoint - nome/component value/enpoint
  const [
    businessResponse, 
    businessCardResponse,
    partnersResponse,
    clientsResponse,
    clientsMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<iCoreBusiness[]>>(ENDPOINTS.business, { headers }),
    get<SharepointResponse<iCoreBusinessCard[]>>(ENDPOINTS.businessCard, { headers }),
    get<SharepointResponse<IPartners[]>>(ENDPOINTS.partners, { headers }),
    get<SharepointResponse<IClients[]>>(ENDPOINTS.clients, { headers }),
    get<SharepointResponse<IClientsMainSettings[]>>(ENDPOINTS.clientsMainSettings, { headers }),
  ])

  return {
    props: {
      business: axiosParser(businessResponse),
      businessCard: axiosParser(businessCardResponse),
      partnersProps: axiosParser(partnersResponse),
      clientsProps: axiosParser(clientsResponse),
      clientsMainSettingsProps: axiosParser(clientsMainSettingsResponse),
    }
  }
}
