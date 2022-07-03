import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getLayout } from '../components/template';
import { Banner, Business, Hero, Partners } from '../components/organism';
import { SharepointResponse, iCoreBusiness, iCoreBusinessCard } from '../models';
import { ENDPOINTS, get } from '../services';
import { getHeader } from './api/auth';
import { axiosParser, parseResults } from '../utils';

function Home({business, businessCard}: InferGetServerSidePropsType<typeof getServerSideProps> ){   

  const coreBusiness = parseResults<iCoreBusiness[]>(business) ;
  const coreBusinessCards = parseResults<iCoreBusinessCard[]>(businessCard);
 
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
        <Partners /> 
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
    businessCardResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<iCoreBusiness[]>>(ENDPOINTS.business, { headers }),
    get<SharepointResponse<iCoreBusinessCard[]>>(ENDPOINTS.businessCard, { headers }),
  ])

  return {
    props: {
      business: axiosParser(businessResponse),
      businessCard: axiosParser(businessCardResponse),
    }
  }
}
