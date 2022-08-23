import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, Design, Form, Idea, Products } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    IDesignCommunication,
    IDesignCommunicationMainSettings,
    IProducts,
    IProductsMainSettings,
    IForm,
    IFormMainSettings,
    IIdea,
    IIdeaMainSettings
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function DesignAndCommuncation({
  customHeroProps,
  designProps,
  communicationProps,
  designAndCommunicationMainSettingsProps,
  ideaResponse,
  ideaMainSettingsResponse,
  productsResponse,
  productsMainSettingsResponse,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const design = parseResults<IDesignCommunication[]>(designProps);
  const communication = parseResults<IDesignCommunication[]>(communicationProps);
  const designAndCommunication = parseResults<IDesignCommunicationMainSettings[]>(designAndCommunicationMainSettingsProps);
  const idea = parseResults<IIdea[]>(ideaResponse);
  const ideaMainSettings = parseResults<IIdeaMainSettings[]>(ideaMainSettingsResponse);
  const products = parseResults<IProducts[]>(productsResponse);
  const productsMainSettings = parseResults<IProductsMainSettings[]>(productsMainSettingsResponse);
  const form = parseResults<IForm[]>(formProps);
  const formMainSettings = parseResults<IFormMainSettings[]>(formMainSettingsProps);
 
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
        <Idea idea={idea} ideaMainSettings={ideaMainSettings} />
        <Products products={products} productsMainSettings={productsMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
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
    ideaResponse,
    ideaMainSettings,
    productsResponse,
    productsMainSettingsResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<IDesignCommunication[]>>(ENDPOINTS.design, { headers }),
    get<SharepointResponse<IDesignCommunication[]>>(ENDPOINTS.communication, { headers }),
    get<SharepointResponse<IDesignCommunicationMainSettings[]>>(ENDPOINTS.designAndCommunciationsMainSettings, { headers }),
    get<SharepointResponse<IIdea[]>>(ENDPOINTS.idea, { headers }),
    get<SharepointResponse<IIdeaMainSettings[]>>(ENDPOINTS.ideaMainSettings, { headers }),
    get<SharepointResponse<IProducts[]>>(ENDPOINTS.products, { headers }),
    get<SharepointResponse<IProductsMainSettings[]>>(ENDPOINTS.productsMainSettings, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.formDesign, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formDesignMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      designProps: axiosParser(designResponse),
      communicationProps: axiosParser(communicationResponse),
      designAndCommunicationMainSettingsProps: axiosParser(designAndCommunicationMainSettingsResponse),
      ideaResponse: axiosParser(ideaResponse),
      ideaMainSettingsResponse: axiosParser(ideaMainSettings),
      productsResponse: axiosParser(productsResponse),
      productsMainSettingsResponse: axiosParser(productsMainSettingsResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
