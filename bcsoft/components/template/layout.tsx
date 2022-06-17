import { PropsWithChildren, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Navbar, Footer } from '../organism'

const queryClient = new QueryClient()

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <Navbar /> */}
            {children}
            <Footer />
        </QueryClientProvider>
    )
}