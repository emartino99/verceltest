import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Cervellone, EstateDevelopmentTeam, LaBellaEstateHero, Products } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ILaBellaEstateHero,
    ICervelloneItem,
    ICervelloneMainSettings,
    IDeveloperCard,
    IDevelopmentMainSettings,
    IProducts,
    IProductsMainSettings,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function LaBellaEstate({
    laBellaEstateProps,
    cervelloneProps,
    cervelloneMainSettingsProps,
    developmentTeamProps,
    developmentTeamMainSettingsProps,
    productsProps,
    productsMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const laBellaEstate = parseResults<ILaBellaEstateHero[]>(laBellaEstateProps);
  const cervellone = parseResults<ICervelloneItem[]>(cervelloneProps);
  const cervelloneMainSettings = parseResults<ICervelloneMainSettings[]>(cervelloneMainSettingsProps);
  const developmentTeam = parseResults<IDeveloperCard[]>(developmentTeamProps);
  const developmentTeamMainSettings = parseResults<IDevelopmentMainSettings[]>(developmentTeamMainSettingsProps);
  const products = parseResults<IProducts[]>(productsProps);
  const productsMainSettings = parseResults<IProductsMainSettings[]>(productsMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <LaBellaEstateHero laBellaEstate={laBellaEstate} />
        <Cervellone cervellone={cervellone} cervelloneMainSettings={cervelloneMainSettings} />
        <EstateDevelopmentTeam developmentTeam={developmentTeam} developmentTeamMainSettings={developmentTeamMainSettings} />
        <Products products={products} productsMainSettings={productsMainSettings} />
      </main>
    </>
  )
}

export default LaBellaEstate

LaBellaEstate.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    laBellaEstateResponse,
    cervelloneResponse,
    cervelloneMainSettingsResponse,
    developmentTeamResponse,
    developmentTeamMainSettingsResponse,
    productsResponse,
    productsMainSettingsResponse,
    
  ] = await Promise.allSettled([
    get<SharepointResponse<ILaBellaEstateHero[]>>(ENDPOINTS.laBellaEstateHero, { headers }),
    get<SharepointResponse<ICervelloneItem[]>>(ENDPOINTS.cervelloneItems, { headers }),
    get<SharepointResponse<ICervelloneMainSettings[]>>(ENDPOINTS.cervelloneMainSettings, { headers }),
    get<SharepointResponse<IDeveloperCard[]>>(ENDPOINTS.estateDevelopmentTeam, { headers }),
    get<SharepointResponse<IDevelopmentMainSettings[]>>(ENDPOINTS.estateDevelopmentTeamMainSettings, { headers }),
    get<SharepointResponse<IProducts[]>>(ENDPOINTS.laBellaEstatePartners, { headers }),
    get<SharepointResponse<IProductsMainSettings[]>>(ENDPOINTS.laBellaEstatePartnersMainSettings, { headers })
  ])

  return {
    props: {
        laBellaEstateProps: axiosParser(laBellaEstateResponse),
        cervelloneProps: axiosParser(cervelloneResponse),
        cervelloneMainSettingsProps: axiosParser(cervelloneMainSettingsResponse),
        developmentTeamProps: axiosParser(developmentTeamResponse),
        developmentTeamMainSettingsProps: axiosParser(developmentTeamMainSettingsResponse),
        productsProps: axiosParser(productsResponse),
        productsMainSettingsProps: axiosParser(productsMainSettingsResponse)
    }
  }
}
