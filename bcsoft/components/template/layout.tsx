import { PropsWithChildren, ReactElement } from 'react'
import { Navbar, Footer } from '../organism'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}