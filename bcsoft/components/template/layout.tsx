import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Navbar, Footer } from '../organism'; 

export const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
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
