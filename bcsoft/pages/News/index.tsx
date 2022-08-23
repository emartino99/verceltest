import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, LatestNews, LinkedinFeed, YoutubeVideos, } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ILatestNewsMainSettings,
    ILatestNews,
    ILatestNewsNewsletter,
    ILinkedinFeed,
    ILinkedinFeedMainSettings,
    IYoutubeMainSettings,
    IYoutube
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function News({
  customHeroProps,
  latestNewsMainSettingsProps,
  latestNewsProps,
  latestNewsNewsletterProps,
  linkedinFeedProps,
  linkedinFeedMainSettingsProps,
  youtubeProps,
  youtubeMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const latestNewsMainSettings = parseResults<ILatestNewsMainSettings[]>(latestNewsMainSettingsProps);
  const latestNews = parseResults<ILatestNews[]>(latestNewsProps);
  const latestNewsNewsletter = parseResults<ILatestNewsNewsletter[]>(latestNewsNewsletterProps);
  const linkedinFeed = parseResults<ILinkedinFeed[]>(linkedinFeedProps);
  const linkedinFeedMainSettings = parseResults<ILinkedinFeedMainSettings[]>(linkedinFeedMainSettingsProps);
  const youtube = parseResults<IYoutube[]>(youtubeProps);
  const youtubeMainSettings = parseResults<IYoutubeMainSettings[]>(youtubeMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <LatestNews latestNewsMainSettings={latestNewsMainSettings} latestNews={latestNews} latestNewsNewsletter={latestNewsNewsletter} />
        <LinkedinFeed linkedinFeed={linkedinFeed} linkedinFeedMainSettings={linkedinFeedMainSettings} />
        <YoutubeVideos youtube={youtube} youtubeMainSettings={youtubeMainSettings} />
      </main>
    </>
  )
}

export default News

News.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    latestNewsMainSettingsResponse,
    latestNewsResponse,
    latestNewsNewsletterResponse,
    linkedinFeedResponse,
    linkedinFeedMainSettingsResponse,
    youtubeResponse,
    youtubeMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<ILatestNewsMainSettings[]>>(ENDPOINTS.latestNewsMainSettings, { headers }),
    get<SharepointResponse<ILatestNews[]>>(ENDPOINTS.latestNews, { headers }),
    get<SharepointResponse<ILatestNewsNewsletter[]>>(ENDPOINTS.latestNewsNewsletter, { headers }),
    get<SharepointResponse<ILinkedinFeed[]>>(ENDPOINTS.linkedinFeed, { headers }),
    get<SharepointResponse<ILinkedinFeedMainSettings[]>>(ENDPOINTS.linkedinFeedMainSettings, { headers }),
    get<SharepointResponse<IYoutube[]>>(ENDPOINTS.youtube, { headers }),
    get<SharepointResponse<IYoutubeMainSettings[]>>(ENDPOINTS.youtubeMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      latestNewsMainSettingsProps: axiosParser(latestNewsMainSettingsResponse),
      latestNewsProps: axiosParser(latestNewsResponse),
      latestNewsNewsletterProps: axiosParser(latestNewsNewsletterResponse),
      linkedinFeedProps: axiosParser(linkedinFeedResponse),
      linkedinFeedMainSettingsProps: axiosParser(linkedinFeedMainSettingsResponse),
      youtubeProps: axiosParser(youtubeResponse),
      youtubeMainSettingsProps: axiosParser(youtubeMainSettingsResponse),
    }
  }
}
