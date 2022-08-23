import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Courses, CoursesStructure, CustomHero, Form } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
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

function FreeCourses({
  customHeroProps,
  coursesStructureProps,
  coursesStructureMainSettingsProps,
  coursesProps,
  coursesMainSettingsProps,
  formProps,
  formMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const coursesStructure = parseResults<ICoursesStructure[]>(coursesStructureProps);
  const coursesStructureMainSettings = parseResults<ICoursesStructureMainSettings[]>(coursesStructureMainSettingsProps);
  const courses = parseResults<ICourses[]>(coursesProps);
  const coursesMainSettings = parseResults<ICoursesMainSettings[]>(coursesMainSettingsProps);
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
        <CoursesStructure coursesStructure={coursesStructure} coursesStructureMainSettings={coursesStructureMainSettings} />
        <Courses courses={courses} coursesMainSettings={coursesMainSettings} />
        <Form form={form} formMainSettings={formMainSettings} />
      </main>
    </>
  )
}

export default FreeCourses

FreeCourses.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    coursesStructureResponse,
    coursesStructureMainSettingsResponse,
    coursesResponse,
    coursesMainSettingsResponse,
    formResponse,
    formMainSettingsResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<ICoursesStructure[]>>(ENDPOINTS.coursesStructureFreeCourses, { headers }),
    get<SharepointResponse<ICoursesStructureMainSettings[]>>(ENDPOINTS.coursesStructureFreeCoursesMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.coursesFreeCourses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesFreeCoursesMainSettings, { headers }),
    get<SharepointResponse<IForm[]>>(ENDPOINTS.formFreeCourses, { headers }),
    get<SharepointResponse<IFormMainSettings[]>>(ENDPOINTS.formFreeCoursesMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      coursesStructureProps: axiosParser(coursesStructureResponse),
      coursesStructureMainSettingsProps: axiosParser(coursesStructureMainSettingsResponse),
      coursesProps: axiosParser(coursesResponse),
      coursesMainSettingsProps: axiosParser(coursesMainSettingsResponse),
      formProps: axiosParser(formResponse),
      formMainSettingsProps: axiosParser(formMainSettingsResponse)
    }
  }
}
