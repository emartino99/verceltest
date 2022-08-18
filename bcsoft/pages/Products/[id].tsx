import Head from 'next/head';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getLayout } from '../../components/template';
import {
    SharepointResponse,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, paramsValidation, parseResults } from '../../utils';
import { PageEndpoints, IProductsPage } from '../../models/products_page';
import { getComponentFrom } from '../../components/organism';

function ProductsPage ({
    template,
    configurator
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
   
    return (
        <>
            <Head>
                <title>BCSoft</title>
                <meta name="description" content="BCsoft website Company-About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='grid template-col-12'>
                {
                    configurator?.map(([key, props])=> {
                        const Component = getComponentFrom(key);
                        return !!Component && <Component key={key} {...props} />

                    })
                }
            </main>
        </>
    )
}

export default ProductsPage

ProductsPage.getLayout = getLayout

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const id = context.params?.id;
    if (!paramsValidation(id))return {props:{}};
    const headers = await getHeader();
    const [configuartor] = await Promise.allSettled([ get<SharepointResponse<IProductsPage[]>>(ENDPOINTS.productPage, {headers})])
    const result = parseResults <IProductsPage[]>(axiosParser(configuartor));
    const page = result?.filter(pages => pages.id === id);
    if (!page?.length) return { props: {} };
    const { template, endpoints } = page[0];
    const apiList = Object.entries(endpoints).reduce<PageEndpoints[]>((acc, [key, position]) => {
        acc[position] = key as PageEndpoints;
        return acc
    }, [])
    const list = await Promise.allSettled(
        apiList.map(api => get(ENDPOINTS[api], { headers }))
    )
    const response = list.map((el: any) => parseResults(axiosParser(el)))

    return {
        props: {
            template,
            configurator: apiList.map( (el, index) => ([el, {[el]: response[index]}])) as [PageEndpoints, Record<PageEndpoints, any>][]
        }
    }
}
