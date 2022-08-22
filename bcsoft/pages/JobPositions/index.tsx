import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Consultants, CustomHero, Form, JobOffers } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    IConsultants,
    IJobOffers,
    IForm,
    IFormMainSettings
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function JobPositions({
  customHeroProps,
  consultantsProps,
  jobOffersProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const consultants = parseResults<IConsultants[]>(consultantsProps);
  const jobOffers = parseResults<IJobOffers[]>(jobOffersProps);
  const form = parseResults<IForm[]>(formProps);
  const formMainSettings = parseResults<IFormMainSettings[]>(formMainSettingsProps);
 
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
        <Form form={form} formMainSettings={formMainSettings} />
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
    jobOffersResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroJobPositions, { headers }),
    get<SharepointResponse<IConsultants[]>>(ENDPOINTS.consultants, { headers }),
    get<SharepointResponse<IJobOffers[]>>(ENDPOINTS.jobOffers, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.formJobPositions, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formJobPositionsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      consultantsProps: axiosParser(consultantsResponse),
      jobOffersProps: axiosParser(jobOffersResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}