import Head from 'next/head'
import { getLayout } from '../components/template';
import { Banner, Business, Hero, Partners } from '../components/organism';
 

const Home = ( ) => {   
 
  return (
    <>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid template-col-12'>
        <Hero />
        <Banner />
        <Business />
        <Partners /> 
      </main>

    </>
  )
}

export default Home

Home.getLayout = getLayout
