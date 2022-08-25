import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import { CustomHero, Quote, CertificationsItems } from '../../components/organism';
import { getLayout } from '../../components/template';
import { 
    SharepointResponse,
    ICustomHero,
    IQuote,
    ICertifications,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, parseResults } from '../../utils';

function Certifications({
  customHeroProps,
  certificationsMicrosoftResponse,
  certificationsISO9001Response,
  certificationsISO27001Response,
  quoteProps
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const customHero = parseResults<ICustomHero[]>(customHeroProps);
  const certificationsMicrosoft = parseResults<ICertifications[]>(certificationsMicrosoftResponse);
  const certificationsISO9001 = parseResults<ICertifications[]>(certificationsISO9001Response);
  const certificationsISO27001 = parseResults<ICertifications[]>(certificationsISO27001Response);
  const quote = parseResults<IQuote[]>(quoteProps);
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website Company-Certificazioni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <CustomHero customHero={customHero} />
        <CertificationsItems certifications={certificationsMicrosoft} />
        <CertificationsItems certifications={certificationsISO9001} />
        <CertificationsItems certifications={certificationsISO27001} />
        <Quote quote={quote} />
      </main>
    </>
  )
}

export default Certifications

Certifications.getLayout = getLayout

export const getServerSideProps = async () => {
  
  const headers = await getHeader(); 
  const [
    customHeroResponse,
    certificationsMicrosoftResponse,
    certificationsISO9001,
    certificationsISO27001,
    quoteResponse
  ] = await Promise.allSettled([
    get<SharepointResponse<ICustomHero[]>>(ENDPOINTS.customHero, { headers }),
    get<SharepointResponse<ICertifications[]>>(ENDPOINTS.certificationsMicrosoft, { headers }),
    get<SharepointResponse<ICertifications[]>>(ENDPOINTS.certificationsISO9001, { headers }),
    get<SharepointResponse<ICertifications[]>>(ENDPOINTS.certificationsISO27001, { headers }),
    get<SharepointResponse<IQuote[]>>(ENDPOINTS.quote, { headers })
  ])

  return {
    props: {
      customHeroProps: axiosParser(customHeroResponse),
      certificationsMicrosoftResponse: axiosParser(certificationsMicrosoftResponse),
      certificationsISO9001Response: axiosParser(certificationsISO9001),
      certificationsISO27001Response: axiosParser(certificationsISO27001),
      quoteProps: axiosParser(quoteResponse),
    }
  }
}