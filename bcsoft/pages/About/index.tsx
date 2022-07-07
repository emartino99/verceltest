import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Locations, Numbers } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ILocations,
    ILocationsMainSettings,
    INumbers,
    INumbersMainSettings
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function About({
  numbersProps,
  numbersMainSettingsProps,
  locationsProps,
  locationsMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){  
  
  const numbers = parseResults<INumbers[]>(numbersProps);
  const numbersMainSettings = parseResults<INumbersMainSettings[]>(numbersMainSettingsProps);
  const locationsInfo = parseResults<ILocations[]>(locationsProps);
  const locationsMainSettings = parseResults<ILocationsMainSettings[]>(locationsMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <Numbers numbers={numbers} numbersMainSettings={numbersMainSettings} />
        <Locations locationsInfo={locationsInfo} locationsMainSettings={locationsMainSettings} />
      </main>
    </>
  )
}

export default About

About.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    numbersResponse,
    numbersMainSettingsResponse,
    locationsResponse,
    locationsMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<INumbers[]>>(ENDPOINTS.numbers, { headers }),
    get<SharepointResponse<INumbersMainSettings[]>>(ENDPOINTS.numbersMainSettings, { headers }),
    get<SharepointResponse<ILocations[]>>(ENDPOINTS.locations, { headers }),
    get<SharepointResponse<ILocationsMainSettings[]>>(ENDPOINTS.locationsMainSettings, { headers }),
  ])

  return {
    props: {
      numbersProps: axiosParser(numbersResponse),
      numbersMainSettingsProps: axiosParser(numbersMainSettingsResponse),
      locationsProps: axiosParser(locationsResponse),
      locationsMainSettingsProps: axiosParser(locationsMainSettingsResponse),
    }
  }
}
