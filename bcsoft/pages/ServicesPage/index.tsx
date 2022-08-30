import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { AvaiableServices, CustomHero, Form, InfoBanner, OurServices, Services, ServicesProducts } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ICardServicesProducts,
    IServicesProductsMainSettings,
    IOurServices,
    IInfoBanner,
    ICardAvaiableService,
    IAvaiableServicesMainSettings,
    IServices,
    IServicesMainSettings,
    IForm,
    IFormMainSettings,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function ServicesPage({
  customHeroProps,
  cardsServicesProps,
  servicesProductsMainSettingsProps,
  ourServicesProps,
  infoBannerProps,
  softwareDevelopmentProps,
  softwareDevelopmentMainSettingsProps,
  servicesProps,
  servicesMainSettingsProps,
  designProps,
  designMainSettingsProps,
  communicationProps,
  communicationMainSettingsProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const cardsServices = parseResults<ICardServicesProducts[]>(cardsServicesProps);
  const servicesProductsMainSetting = parseResults<IServicesProductsMainSettings[]>(servicesProductsMainSettingsProps);
  const ourServices = parseResults<IOurServices[]>(ourServicesProps);
  const infoBanner = parseResults<IInfoBanner[]>(infoBannerProps);
  const softwareDevelopment = parseResults<ICardAvaiableService[]>(softwareDevelopmentProps);
  const softwareDevelopmentMainSettings = parseResults<IAvaiableServicesMainSettings[]>(softwareDevelopmentMainSettingsProps);
  const services = parseResults<IServices[]>(servicesProps);
  const servicesMainSettings = parseResults<IServicesMainSettings[]>(servicesMainSettingsProps);
  const design = parseResults<ICardAvaiableService[]>(designProps);
  const designMainSettings = parseResults<IAvaiableServicesMainSettings[]>(designMainSettingsProps);
  const communication = parseResults<ICardAvaiableService[]>(communicationProps);
  const communicationMainSettings = parseResults<IAvaiableServicesMainSettings[]>(communicationMainSettingsProps);
  const form = parseResults<IForm[]>(formProps);
  const formMainSettings = parseResults<IFormMainSettings[]>(formMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <ServicesProducts cardsServices={cardsServices} servicesProductsMainSetting={servicesProductsMainSetting} />
        <OurServices ourServices={ourServices} />
        <InfoBanner infoBanner={infoBanner} />
        <AvaiableServices cardAvaiableService={softwareDevelopment} avaiableServicesMainSettings={softwareDevelopmentMainSettings} />
        <Services services={services} servicesMainSettings={servicesMainSettings} />
        <AvaiableServices cardAvaiableService={design} avaiableServicesMainSettings={designMainSettings} />
        <AvaiableServices cardAvaiableService={communication} avaiableServicesMainSettings={communicationMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default ServicesPage

ServicesPage.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    cardsServicesResponse,
    servicesProductsMainSettingsResponse,
    ourServicesResponse,
    infoBannerResponse,
    softwareDevelopmentResponse,
    softwareDevelopmentMainSettingsResponse,
    servicesResponse,
    servicesMainSettingsResponse,
    designResponse,
    designMainSettingsResponse,
    communicationResponse,
    communicationMainSettingsResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<ICardServicesProducts[]>>(ENDPOINTS.cardsServicesProducts, { headers }),
    get<SharepointResponse<IServicesProductsMainSettings[]>>(ENDPOINTS.servicesProductsMainSettings, { headers }),
    get<SharepointResponse<IOurServices[]>>(ENDPOINTS.ourServices, { headers }),
    get<SharepointResponse<IInfoBanner[]>>(ENDPOINTS.infoBannerServices, { headers }),
    get<SharepointResponse<ICardAvaiableService[]>>(ENDPOINTS.softwareDevelopment, { headers }),
    get<SharepointResponse<IAvaiableServicesMainSettings[]>>(ENDPOINTS.softwareDevelopmentMainSettings, { headers }),
    get<SharepointResponse<IServices[]>>(ENDPOINTS.services, { headers }),
    get<SharepointResponse<IServicesMainSettings[]>>(ENDPOINTS.servicesMainSettings, { headers }),
    get<SharepointResponse<ICardAvaiableService[]>>(ENDPOINTS.designService, { headers }),
    get<SharepointResponse<IAvaiableServicesMainSettings[]>>(ENDPOINTS.designServiceMainSettings, { headers }),
    get<SharepointResponse<ICardAvaiableService[]>>(ENDPOINTS.communicationService, { headers }),
    get<SharepointResponse<IAvaiableServicesMainSettings[]>>(ENDPOINTS.communicationServiceMainSettings, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.forms, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      cardsServicesProps: axiosParser(cardsServicesResponse),
      servicesProductsMainSettingsProps: axiosParser(servicesProductsMainSettingsResponse),
      ourServicesProps: axiosParser(ourServicesResponse),
      infoBannerProps: axiosParser(infoBannerResponse),
      softwareDevelopmentProps: axiosParser(softwareDevelopmentResponse),
      softwareDevelopmentMainSettingsProps: axiosParser(softwareDevelopmentMainSettingsResponse),
      servicesProps: axiosParser(servicesResponse),
      servicesMainSettingsProps: axiosParser(servicesMainSettingsResponse),
      designProps: axiosParser(designResponse),
      designMainSettingsProps: axiosParser(designMainSettingsResponse),
      communicationProps: axiosParser(communicationResponse),
      communicationMainSettingsProps: axiosParser(communicationMainSettingsResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
