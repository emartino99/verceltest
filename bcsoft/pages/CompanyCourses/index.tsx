import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CoursesAndMasters, CustomHero, Form } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ICoursesMastersMainSettings,
    ICardsCoursesMasters,
    IForm,
    IFormMainSettings,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function CompanyCourses({
  customHeroProps,
  coursesMastersMainSettingsProps,
  cardsCoursesMastersProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const coursesMastersMainSettings = parseResults<ICoursesMastersMainSettings[]>(coursesMastersMainSettingsProps);
  const cardsCoursesMasters = parseResults<ICardsCoursesMasters[]>(cardsCoursesMastersProps);
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
        <CoursesAndMasters coursesMastersMainSettings={coursesMastersMainSettings} cardsCoursesMasters={cardsCoursesMasters} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default CompanyCourses

CompanyCourses.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    coursesMastersResponse,
    cardsCoursesResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroCompanyCourses, { headers }),
    get<SharepointResponse<ICoursesMastersMainSettings[]>>(ENDPOINTS.coursesMastersMainSettings, { headers }),
    get<SharepointResponse<ICardsCoursesMasters[]>>(ENDPOINTS.cardsCourses, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.formCompanyCourses, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formCompanyCoursesMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      coursesMastersMainSettingsProps: axiosParser(coursesMastersResponse),
      cardsCoursesMastersProps: axiosParser(cardsCoursesResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
