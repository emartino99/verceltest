import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, Form, InfoBanner, Locations, Services } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ILocations,
    ILocationsMainSettings,
    IInfoBanner,
    IServices,
    IServicesMainSettings,
    IFormMainSettings,
    IForm,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function Contacts({
  customHeroProps,
  servicesProps,
  servicesMainSettingsProps,
  locationsProps,
  locationsMainSettingsProps,
  infoBannerProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const services = parseResults<IServices[]>(servicesProps);
  const servicesMainSettings = parseResults<IServicesMainSettings[]>(servicesMainSettingsProps);
  const locationsInfo = parseResults<ILocations[]>(locationsProps);
  const locationsMainSettings = parseResults<ILocationsMainSettings[]>(locationsMainSettingsProps);
  const infoBanner = parseResults<IInfoBanner[]>(infoBannerProps);
  const form = parseResults<IForm[]>(formProps);
  const formMainSettings = parseResults<IFormMainSettings[]>(formMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-Contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <Services services={services} servicesMainSettings={servicesMainSettings} />
        <Locations locationsInfo={locationsInfo} locationsMainSettings={locationsMainSettings} />
        <InfoBanner infoBanner={infoBanner} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default Contacts

Contacts.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    servicesResponse,
    servicesMainSettingsResponse,
    locationsResponse,
    locationsMainSettingsResponse,
    infoBannerResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<IServices[]>>(ENDPOINTS.services, { headers }),
    get<SharepointResponse<IServicesMainSettings[]>>(ENDPOINTS.servicesMainSettings, { headers }),
    get<SharepointResponse<ILocations[]>>(ENDPOINTS.locations, { headers }),
    get<SharepointResponse<ILocationsMainSettings[]>>(ENDPOINTS.locationsContactsMainSettings, { headers }),
    get<SharepointResponse<IInfoBanner[]>>(ENDPOINTS.infoBannerContacts, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.formContacts, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formContactsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      servicesProps: axiosParser(servicesResponse),
      servicesMainSettingsProps: axiosParser(servicesMainSettingsResponse),
      locationsProps: axiosParser(locationsResponse),
      locationsMainSettingsProps: axiosParser(locationsMainSettingsResponse),
      infoBannerProps: axiosParser(infoBannerResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
