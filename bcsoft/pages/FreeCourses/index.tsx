import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { Courses, CoursesStructure, CustomHero } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ICourses,
    ICoursesMainSettings,
    ICoursesStructure,
    ICoursesStructureMainSettings,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function FreeCourses({
  customHeroProps,
  coursesStructureProps,
  coursesStructureMainSettingsProps,
  coursesProps,
  coursesMainSettingsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const coursesStructure = parseResults<ICoursesStructure[]>(coursesStructureProps);
  const coursesStructureMainSettings = parseResults<ICoursesStructureMainSettings[]>(coursesStructureMainSettingsProps);
  const courses = parseResults<ICourses[]>(coursesProps);
  const coursesMainSettings = parseResults<ICoursesMainSettings[]>(coursesMainSettingsProps);
 
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
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroFreeCourses, { headers }),
    get<SharepointResponse<ICoursesStructure[]>>(ENDPOINTS.coursesStructureFreeCourses, { headers }),
    get<SharepointResponse<ICoursesStructureMainSettings[]>>(ENDPOINTS.coursesStructureFreeCoursesMainSettings, { headers }),
    get<SharepointResponse<ICourses[]>>(ENDPOINTS.coursesFreeCourses, { headers }),
    get<SharepointResponse<ICoursesMainSettings[]>>(ENDPOINTS.coursesFreeCoursesMainSettings, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      coursesStructureProps: axiosParser(coursesStructureResponse),
      coursesStructureMainSettingsProps: axiosParser(coursesStructureMainSettingsResponse),
      coursesProps: axiosParser(coursesResponse),
      coursesMainSettingsProps: axiosParser(coursesMainSettingsResponse),
    }
  }
}
