import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CoursesAndMasters, CustomHero } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    ICoursesMastersMainSettings,
    ICardsCoursesMasters,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function Masters({
  customHeroProps,
  coursesMastersMainSettingsProps,
  cardsCoursesMastersProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const coursesMastersMainSettings = parseResults<ICoursesMastersMainSettings[]>(coursesMastersMainSettingsProps);
  const cardsCoursesMasters = parseResults<ICardsCoursesMasters[]>(cardsCoursesMastersProps);
 
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
      </main>
    </>
  )
}

export default Masters

Masters.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    coursesMastersResponse,
    cardsCoursesResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHeroMasters, { headers }),
    get<SharepointResponse<ICoursesMastersMainSettings[]>>(ENDPOINTS.mastersMainSettings, { headers }),
    get<SharepointResponse<ICardsCoursesMasters[]>>(ENDPOINTS.cardsMasters, { headers }),
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      coursesMastersMainSettingsProps: axiosParser(coursesMastersResponse),
      cardsCoursesMastersProps: axiosParser(cardsCoursesResponse),
    }
  }
}
