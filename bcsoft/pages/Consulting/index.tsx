import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { ClientsFeedbacks, CustomHero, Form, Locations, Numbers, Services, ServicesItem } from '../../components/organism';
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
    ILocations,
    ILocationsMainSettings,
    IServicesItem,
    IFormMainSettings,
    IForm
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function Consulting({
  customHeroProps,
  numbersProps,
  numbersMainSettingsProps,
  servicesProps,
  servicesMainSettingsProps,
  servicesItemBlockchainProps,
  servicesItemAMProps,
  clientsFeedbacksProps,
  clientsFeedbacksMainSettingsProps,
  locationsProps,
  locationsMainSettingsProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const numbers = parseResults<INumbers[]>(numbersProps);
  const numbersMainSettings = parseResults<INumbersMainSettings[]>(numbersMainSettingsProps);
  const services = parseResults<IServices[]>(servicesProps);
  const servicesMainSettings = parseResults<IServicesMainSettings[]>(servicesMainSettingsProps);
  const servicesItemBlockchain = parseResults<IServicesItem[]>(servicesItemBlockchainProps);
  const servicesItemAM = parseResults<IServicesItem[]>(servicesItemAMProps);
  const feedbacks = parseResults<IFeedbacks[]>(clientsFeedbacksProps);
  const feedbacksMainSettings = parseResults<IFeedbacksMainSettings[]>(clientsFeedbacksMainSettingsProps);
  const locationsInfo = parseResults<ILocations[]>(locationsProps);
  const locationsMainSettings = parseResults<ILocationsMainSettings[]>(locationsMainSettingsProps);
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
        <ServicesItem servicesItem={servicesItemAM} />
        <ServicesItem servicesItem={servicesItemBlockchain} />
        <ClientsFeedbacks feedbacks={feedbacks} feedbacksMainSettings={feedbacksMainSettings} />
        <Locations locationsInfo={locationsInfo} locationsMainSettings={locationsMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default Consulting

Consulting.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    numbersResponse,
    numbersMainSettingsResponse,
    servicesResponse,
    servicesMainSettingsResponse,
    servicesItemBlockchainResponse,
    servicesItemAMResponse,
    clientsFeedbacksResponse,
    clientsFeedbacksMainSettingssponse,
    locationsResponse,
    locationsMainSettingsResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<INumbers[]>>(ENDPOINTS.numbersConsulting, { headers }),
    get<SharepointResponse<INumbersMainSettings[]>>(ENDPOINTS.numbersConsultingMainSettings, { headers }),
    get<SharepointResponse<IServices[]>>(ENDPOINTS.services, { headers }),
    get<SharepointResponse<IServicesMainSettings[]>>(ENDPOINTS.servicesMainSettings, { headers }),
    get<SharepointResponse<IServicesItem[]>>(ENDPOINTS.servicesItemBlockchain, { headers }),
    get<SharepointResponse<IServicesItem[]>>(ENDPOINTS.servicesItemAM, { headers }),
    get<SharepointResponse<IFeedbacks[]>>(ENDPOINTS.clientsFeedbacksConsulting, { headers }),
    get<SharepointResponse<IFeedbacksMainSettings[]>>(ENDPOINTS.clientsFeedbacksMainSettings, { headers }),
    get<SharepointResponse<ILocations[]>>(ENDPOINTS.locations, { headers }),
    get<SharepointResponse<ILocationsMainSettings[]>>(ENDPOINTS.locationsConsultingMainSettings, { headers }),
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
      servicesItemBlockchainProps: axiosParser(servicesItemBlockchainResponse),
      servicesItemAMProps: axiosParser(servicesItemAMResponse),
      clientsFeedbacksProps: axiosParser(clientsFeedbacksResponse),
      clientsFeedbacksMainSettingsProps: axiosParser(clientsFeedbacksMainSettingssponse),
      locationsProps: axiosParser(locationsResponse),
      locationsMainSettingsProps: axiosParser(locationsMainSettingsResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
