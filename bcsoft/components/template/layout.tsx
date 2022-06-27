import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Navbar, Footer } from '../organism';
// import  '../../assets/sprite.svg';
import Head from 'next/head';

export const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            {/* <Head>
                <link rel='preload' as='image' type='image/svg+xml' href='assets/sprite.svg'/>
            </Head> */}
            {/* <Sprite  /> */}
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export type GetLayoutType = (page: ReactElement) => ReactNode;

export const getLayout: GetLayoutType = (page) => {
    return <Layout>{page}</Layout>;
};
