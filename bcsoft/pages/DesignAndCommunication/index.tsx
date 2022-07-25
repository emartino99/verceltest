import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, Design, Products } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    IDesignCommunication,
    IDesignCommunicationMainSettings,
    IProducts,
    IProductsMainSettings
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function DesignAndCommuncation({
  customHeroProps,
  designProps,
  communicationProps,
  designAndCommunicationMainSettingsProps,
  productsResponse,
  productsMainSettingsResponse
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const design = parseResults<IDesignCommunication[]>(designProps);
  const communication = parseResults<IDesignCommunication[]>(communicationProps);
  const designAndCommunication = parseResults<IDesignCommunicationMainSettings[]>(designAndCommunicationMainSettingsProps);
  const products = parseResults<IProducts[]>(productsResponse);
  const productsMainSettings = parseResults<IProductsMainSettings[]>(productsMainSettingsResponse);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Services-Factory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <Design design={design} communication={communication} designAndCommunication={designAndCommunication} />
        <Products products={products} productsMainSettings={productsMainSettings} />
      </main>
    </>
  )
}

export default DesignAndCommuncation

DesignAndCommuncation.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    designResponse,
    communicationResponse,
    designAndCommunicationMainSettingsResponse,
    productsResponse,
    productsMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroDesignAndCommunication, { headers }),
    get<SharepointResponse<IDesignCommunication[]>>(ENDPOINTS.design, { headers }),
    get<SharepointResponse<IDesignCommunication[]>>(ENDPOINTS.communication, { headers }),
    get<SharepointResponse<IDesignCommunicationMainSettings[]>>(ENDPOINTS.designAndCommunciationsMainSettings, { headers }),
    get<SharepointResponse<IProducts[]>>(ENDPOINTS.products, { headers }),
    get<SharepointResponse<IProductsMainSettings[]>>(ENDPOINTS.productsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      designProps: axiosParser(designResponse),
      communicationProps: axiosParser(communicationResponse),
      designAndCommunicationMainSettingsProps: axiosParser(designAndCommunicationMainSettingsResponse),
      productsResponse: axiosParser(productsResponse),
      productsMainSettingsResponse: axiosParser(productsMainSettingsResponse),
    }
  }
}
