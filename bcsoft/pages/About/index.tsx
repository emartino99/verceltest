import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Locations, Numbers, Vision, History, CustomHero, InfoBanner, Quote, BuildYourFuture, Strenghts } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ILocations,
    ILocationsMainSettings,
    INumbers,
    INumbersMainSettings,
    IVision,
    IHistoryCard,
    IHistoryMainSettings,
    ICustomHero,
    IInfoBanner,
    IQuote,
    IFuture,
    IStrengths
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function About({
  customHeroProps,
  historyProps,
  historyMainSettingsProps,
  numbersProps,
  numbersMainSettingsProps,
  visionProps,
  infoBannerProps,
  strengthsProps,
  strengthsSecondContainerProps,
  strengthsThirdContainerProps,
  locationsProps,
  locationsMainSettingsProps,
  buildYourFutureProps,
  quoteProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const historyCards = parseResults<IHistoryCard[]>(historyProps);
  const historyMainSettings = parseResults<IHistoryMainSettings[]>(historyMainSettingsProps);
  const numbers = parseResults<INumbers[]>(numbersProps);
  const numbersMainSettings = parseResults<INumbersMainSettings[]>(numbersMainSettingsProps);
  const vision = parseResults<IVision[]>(visionProps);
  const infoBanner = parseResults<IInfoBanner[]>(infoBannerProps);
  const strenghts = parseResults<IStrengths[]>(strengthsProps);
  const strenghtsSecondContainer = parseResults<IStrengths[]>(strengthsSecondContainerProps);
  const strenghtsThirdContainer = parseResults<IStrengths[]>(strengthsThirdContainerProps);
  const locationsInfo = parseResults<ILocations[]>(locationsProps);
  const locationsMainSettings = parseResults<ILocationsMainSettings[]>(locationsMainSettingsProps);
  const future = parseResults<IFuture[]>(buildYourFutureProps);
  const quote = parseResults<IQuote[]>(quoteProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <History historyCards={historyCards} historyMainSettings={historyMainSettings} />
        <Numbers numbers={numbers} numbersMainSettings={numbersMainSettings} />
        <Vision vision={vision} />
        <InfoBanner infoBanner={infoBanner} />
        <Strenghts strengths={strenghts} strenghtsSecondContainer={strenghtsSecondContainer} strenghtsThirdContainer={strenghtsThirdContainer} />
        <Locations locationsInfo={locationsInfo} locationsMainSettings={locationsMainSettings} />
        <BuildYourFuture future={future} />
        <Quote quote={quote} />
      </main>
    </>
  )
}

export default About

About.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    historyResponse,
    historyMainSettingsResponse,
    numbersResponse,
    numbersMainSettingsResponse,
    visionResponse,
    infoBannerResponse,
    strengthsResponse,
    strengthsSecondContainerResponse,
    strengthsThirdContainerResponse,
    locationsResponse,
    locationsMainSettingsResponse,
    buildYourFutureResponse,
    quoteResponse,
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<IHistoryCard[]>>(ENDPOINTS.history, { headers }),
    get<SharepointResponse<IHistoryMainSettings[]>>(ENDPOINTS.historyMainSettings, { headers }),
    get<SharepointResponse<INumbers[]>>(ENDPOINTS.numbers, { headers }),
    get<SharepointResponse<INumbersMainSettings[]>>(ENDPOINTS.numbersMainSettings, { headers }),
    get<SharepointResponse<IVision[]>>(ENDPOINTS.vision, { headers }),
    get<SharepointResponse<IInfoBanner[]>>(ENDPOINTS.infoBannerAbout, { headers }),
    get<SharepointResponse<IStrengths[]>>(ENDPOINTS.strengths, { headers }),
    get<SharepointResponse<IStrengths[]>>(ENDPOINTS.strengthsSecondContainer, { headers }),
    get<SharepointResponse<IStrengths[]>>(ENDPOINTS.strengthsThirdContainer, { headers }),
    get<SharepointResponse<ILocations[]>>(ENDPOINTS.locations, { headers }),
    get<SharepointResponse<ILocationsMainSettings[]>>(ENDPOINTS.locationsMainSettings, { headers }),
    get<SharepointResponse<IFuture[]>>(ENDPOINTS.buildYourFuture, { headers }),
    get<SharepointResponse<IQuote[]>>(ENDPOINTS.quoteAbout, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      historyProps: axiosParser(historyResponse),
      historyMainSettingsProps: axiosParser(historyMainSettingsResponse),
      numbersProps: axiosParser(numbersResponse),
      numbersMainSettingsProps: axiosParser(numbersMainSettingsResponse),
      visionProps: axiosParser(visionResponse),
      infoBannerProps: axiosParser(infoBannerResponse),
      strengthsProps: axiosParser(strengthsResponse),
      strengthsSecondContainerProps: axiosParser(strengthsSecondContainerResponse),
      strengthsThirdContainerProps: axiosParser(strengthsThirdContainerResponse),
      locationsProps: axiosParser(locationsResponse),
      locationsMainSettingsProps: axiosParser(locationsMainSettingsResponse),
      buildYourFutureProps: axiosParser(buildYourFutureResponse),
      quoteProps: axiosParser(quoteResponse),
    }
  }
}
