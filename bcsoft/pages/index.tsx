import type { GetStaticPropsContext, NextPage } from 'next'
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Logo } from '../assets';
import { Layout } from '../components/template';


const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>BCSoft</title>
        <meta name="description" content="BCsoft website homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid template-col-12'>

        <h1 className='span-auto-12'>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className='span-auto-12' onClick={console.log}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className='span-auto-12 grid template-col-autofill'>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
 
    </Layout>
  )
}

export default Home

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  // const url = "https://bcsoftsrl.sharepoint.com/sites/BCSoft.net.test/_api/web/list/getByTitle('heroQuickLinks')/items"

  // axios
  //   .get(url)
  //   .then(res => {
  //     console.log("🚀 ~ file: index.tsx ~ line 86 ~ getStaticProps ~ res", res)

  //   })
  //   .catch(error => {
  //     console.log("🚀 ~ file: index.tsx ~ line 90 ~ getStaticProps ~ error", error)

  //   });
  return {
    props: {

    }
  }
}