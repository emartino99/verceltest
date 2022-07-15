import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, InfoBanner, Locations, Services } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ILocations,
    ILocationsMainSettings,
    IInfoBanner,
    IServices,
    IServicesMainSettings,
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
  infoBannerProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const services = parseResults<IServices[]>(servicesProps);
  const servicesMainSettings = parseResults<IServicesMainSettings[]>(servicesMainSettingsProps);
  const locationsInfo = parseResults<ILocations[]>(locationsProps);
  const locationsMainSettings = parseResults<ILocationsMainSettings[]>(locationsMainSettingsProps);
  const infoBanner = parseResults<IInfoBanner[]>(infoBannerProps);
 
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
    infoBannerResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroContacts, { headers }),
    get<SharepointResponse<IServices[]>>(ENDPOINTS.servicesContacts, { headers }),
    get<SharepointResponse<IServicesMainSettings[]>>(ENDPOINTS.servicesContactsMainSettings, { headers }),
    get<SharepointResponse<ILocations[]>>(ENDPOINTS.locations, { headers }),
    get<SharepointResponse<ILocationsMainSettings[]>>(ENDPOINTS.locationsContactsMainSettings, { headers }),
    get<SharepointResponse<IInfoBanner[]>>(ENDPOINTS.infoBannerContacts, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      servicesProps: axiosParser(servicesResponse),
      servicesMainSettingsProps: axiosParser(servicesMainSettingsResponse),
      locationsProps: axiosParser(locationsResponse),
      locationsMainSettingsProps: axiosParser(locationsMainSettingsResponse),
      infoBannerProps: axiosParser(infoBannerResponse)
    }
  }
}
