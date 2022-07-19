import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Consultants, CustomHero, JobOffers } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    IConsultants,
    IJobOffers
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function JobPositions({
  customHeroProps,
  consultantsProps,
  jobOffersProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const consultants = parseResults<IConsultants[]>(consultantsProps);
  const jobOffers = parseResults<IJobOffers[]>(jobOffersProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-Certificazioni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <Consultants consultants={consultants} />
        <JobOffers jobOffers={jobOffers} />
      </main>
    </>
  )
}

export default JobPositions

JobPositions.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    consultantsResponse,
    jobOffersResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroJobPositions, { headers }),
    get<SharepointResponse<IConsultants[]>>(ENDPOINTS.consultants, { headers }),
    get<SharepointResponse<IJobOffers[]>>(ENDPOINTS.jobOffers, { headers })
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      consultantsProps: axiosParser(consultantsResponse),
      jobOffersProps: axiosParser(jobOffersResponse)
    }
  }
}