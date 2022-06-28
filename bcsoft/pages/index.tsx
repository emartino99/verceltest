import Head from 'next/head'
import { getLayout } from '../components/template';
import { Banner, Locations, Business, Hero } from '../components/organism';
 

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
        <Locations /> 
      </main>

    </>
  )
}

export default Home

Home.getLayout = getLayout