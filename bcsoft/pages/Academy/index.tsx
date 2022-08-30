import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { ClientsFeedbacks, Courses, CoursesStructure, CustomHero, Form, Numbers } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    INumbers,
    INumbersMainSettings,
    IFeedbacksMainSettings,
    IFeedbacks,
    ICourses,
    ICoursesMainSettings,
    ICoursesStructure,
    ICoursesStructureMainSettings,
    IForm,
    IFormMainSettings,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function Academy({
  customHeroProps,
  clientsFeedbacksProps,
  clientsFeedbacksMainSettingsProps,
  coursesStructureProps,
  coursesStructureMainSettingsProps,
  coursesProps,
  coursesMainSettingsProps,
  numbersProps,
  numbersMainSettingsProps,
  coursesAcademyProps,
  coursesAcademyMainSettingsProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const feedbacks = parseResults<IFeedbacks[]>(clientsFeedbacksProps);
  const feedbacksMainSettings = parseResults<IFeedbacksMainSettings[]>(clientsFeedbacksMainSettingsProps);
  const coursesStructure = parseResults<ICoursesStructure[]>(coursesStructureProps);
  const coursesStructureMainSettings = parseResults<ICoursesStructureMainSettings[]>(coursesStructureMainSettingsProps);
  const courses = parseResults<ICourses[]>(coursesProps);
  const coursesMainSettings = parseResults<ICoursesMainSettings[]>(coursesMainSettingsProps);
  const numbers = parseResults<INumbers[]>(numbersProps);
  const numbersMainSettings = parseResults<INumbersMainSettings[]>(numbersMainSettingsProps);
  const coursesAcademy = parseResults<ICourses[]>(coursesAcademyProps);
  const coursesAcademyMainSettings = parseResults<ICoursesMainSettings[]>(coursesAcademyMainSettingsProps);
  const form = parseResults<IForm[]>(formProps);
  const formMainSettings = parseResults<IFormMainSettings[]>(formMainSettingsProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Services-Factory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <ClientsFeedbacks feedbacks={feedbacks} feedbacksMainSettings={feedbacksMainSettings} />
        <CoursesStructure coursesStructure={coursesStructure} coursesStructureMainSettings={coursesStructureMainSettings} />
        <Courses courses={courses} coursesMainSettings={coursesMainSettings} />
        <Numbers numbers={numbers} numbersMainSettings={numbersMainSettings} />
        <Courses courses={coursesAcademy} coursesMainSettings={coursesAcademyMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default Academy

Academy.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    clientsFeedbacksResponse,
    clientsFeedbacksMainSettingssponse,
    coursesStructureResponse,
    coursesStructureMainSettingsResponse,
    coursesResponse,
    coursesMainSettingsResponse,
    numbersResponse,
    numbersMainSettingsResponse,
    coursesAcademyResponse,
    coursesAcademyMainSettingsResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<IFeedbacks[]>>(ENDPOINTS.clientsFeedbacksAcademy, { headers }),
    get<SharepointResponse<IFeedbacksMainSettings[]>>(ENDPOINTS.clientsFeedbacksAcademyMainSettings, { headers }),
    get<SharepointResponse<ICoursesStructure[]>>(ENDPOINTS.coursesStructure, { headers }),
    get<SharepointResponse<ICoursesStructureMainSettings[]>>(ENDPOINTS.coursesStructureMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.courses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesMainSettings, { headers }),
    get<SharepointResponse<INumbers[]>>(ENDPOINTS.numbersAcademy, { headers }),
    get<SharepointResponse<INumbersMainSettings[]>>(ENDPOINTS.numbersAcademyMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.coursesAcademy, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesAcademyMainSettings, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.forms, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formsMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      clientsFeedbacksProps: axiosParser(clientsFeedbacksResponse),
      clientsFeedbacksMainSettingsProps: axiosParser(clientsFeedbacksMainSettingssponse),
      coursesStructureProps: axiosParser(coursesStructureResponse),
      coursesStructureMainSettingsProps: axiosParser(coursesStructureMainSettingsResponse),
      coursesProps: axiosParser(coursesResponse),
      coursesMainSettingsProps: axiosParser(coursesMainSettingsResponse),
      numbersProps: axiosParser(numbersResponse),
      numbersMainSettingsProps: axiosParser(numbersMainSettingsResponse),
      coursesAcademyProps: axiosParser(coursesAcademyResponse),
      coursesAcademyMainSettingsProps: axiosParser(coursesAcademyMainSettingsResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
