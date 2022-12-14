import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { ClientsFeedbacks, CustomHero, Form, Numbers, ReEngineering, Services, ServicesItem } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    INumbers,
    INumbersMainSettings,
    IServices,
    IServicesMainSettings,
    IFeedbacksMainSettings,
    IFeedbacks,
    IReEngineering,
    IForm,
    IFormMainSettings
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';
import { IServicesItem } from '../../models/services-item';

function Factory({
  customHeroProps,
  numbersProps,
  numbersMainSettingsProps,
  servicesProps,
  servicesMainSettingsProps,
  servicesItemEnterpriseProps,
  servicesItemAMProps,
  reEngineeringProps,
  clientsFeedbacksProps,
  clientsFeedbacksMainSettingsProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const numbers = parseResults<INumbers[]>(numbersProps);
  const numbersMainSettings = parseResults<INumbersMainSettings[]>(numbersMainSettingsProps);
  const services = parseResults<IServices[]>(servicesProps);
  const servicesMainSettings = parseResults<IServicesMainSettings[]>(servicesMainSettingsProps);
  const servicesItemEnterprise = parseResults<IServicesItem[]>(servicesItemEnterpriseProps);
  const servicesItemAM = parseResults<IServicesItem[]>(servicesItemAMProps);
  const reEngineering = parseResults<IReEngineering[]>(reEngineeringProps);
  const feedbacks = parseResults<IFeedbacks[]>(clientsFeedbacksProps);
  const feedbacksMainSettings = parseResults<IFeedbacksMainSettings[]>(clientsFeedbacksMainSettingsProps);
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
        <Numbers numbers={numbers} numbersMainSettings={numbersMainSettings} />
        <Services services={services} servicesMainSettings={servicesMainSettings} />
        <ServicesItem servicesItem={servicesItemEnterprise} />
        <ServicesItem servicesItem={servicesItemAM} />
        <ReEngineering reEngineering={reEngineering} />
        <ClientsFeedbacks feedbacks={feedbacks} feedbacksMainSettings={feedbacksMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default Factory

Factory.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    numbersResponse,
    numbersMainSettingsResponse,
    servicesResponse,
    servicesMainSettingsResponse,
    servicesItemEnterpriseResponse,
    servicesItemAMResponse,
    ReEngineeringResponse,
    clientsFeedbacksResponse,
    clientsFeedbacksMainSettingssponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<INumbers[]>>(ENDPOINTS.numbersFactory, { headers }),
    get<SharepointResponse<INumbersMainSettings[]>>(ENDPOINTS.numbersFactoryMainSettings, { headers }),
    get<SharepointResponse<IServices[]>>(ENDPOINTS.services, { headers }),
    get<SharepointResponse<IServicesMainSettings[]>>(ENDPOINTS.servicesMainSettings, { headers }),
    get<SharepointResponse<IServicesItem[]>>(ENDPOINTS.servicesItemEnterprise, { headers }),
    get<SharepointResponse<IServicesItem[]>>(ENDPOINTS.servicesItemAM, { headers }),
    get<SharepointResponse<IReEngineering[]>>(ENDPOINTS.reEngineering, { headers }),
    get<SharepointResponse<IFeedbacks[]>>(ENDPOINTS.clientsFeedbacks, { headers }),
    get<SharepointResponse<IFeedbacksMainSettings[]>>(ENDPOINTS.clientsFeedbacksMainSettings, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.forms, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      numbersProps: axiosParser(numbersResponse),
      numbersMainSettingsProps: axiosParser(numbersMainSettingsResponse),
      servicesProps: axiosParser(servicesResponse),
      servicesMainSettingsProps: axiosParser(servicesMainSettingsResponse),
      servicesItemEnterpriseProps: axiosParser(servicesItemEnterpriseResponse),
      servicesItemAMProps: axiosParser(servicesItemAMResponse),
      reEngineeringProps: axiosParser(ReEngineeringResponse),
      clientsFeedbacksProps: axiosParser(clientsFeedbacksResponse),
      clientsFeedbacksMainSettingsProps: axiosParser(clientsFeedbacksMainSettingssponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
