import Head from 'next/head';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getLayout } from '../../components/template';
import {
    SharepointResponse,
} from '../../models';
import { ENDPOINTS, get } from '../../services';
import { getHeader } from '../api/auth';
import { axiosParser, paramsValidation, parseResults } from '../../utils';
import { IProductsPage, PageConfigurationModel, PageEndpointsModel } from '../../models/products_page';
import { getComponentFrom } from '../../components';

function AcademyPage({
    template,
    configurator
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>BCSoft</title>
                <meta name="description" content="BCsoft website Academy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='grid template-col-12'>
                {
                    configurator?.map(({nameComponent, ...props}) => {
                        const Component = getComponentFrom(nameComponent);
                        return !!Component && <Component key={nameComponent} {...props} />

                    })
                }
            </main>
        </>
    )
}

export default AcademyPage

AcademyPage.getLayout = getLayout

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const id = context.params?.id;
    if (!paramsValidation(id)) return { props: {} };
    const headers = await getHeader();
    const [configuartor] = await Promise.allSettled([get<SharepointResponse<IProductsPage[]>>(ENDPOINTS.academyPage, { headers })])
    const result = parseResults<IProductsPage[]>(axiosParser(configuartor));
    const page = result?.filter(pages => pages.id0 === id);
    if (!page?.length) return { props: {} };
    const { template, endpoints } = page[0];
    const api = JSON.parse(endpoints) as Record<string, PageEndpointsModel>;
    const apiList = Object.values(api);
    const responseList = await Promise.allSettled( apiList.map(({ endpoint }) => get(ENDPOINTS[endpoint], { headers })))
    const response = responseList.map((el: any) => parseResults(axiosParser(el)))

    const configurator = apiList.reduce < PageConfigurationModel[]>( (acc, {nameComponent, position, prop}, i, array) => {
        acc[position] = {
            ...acc[position],
            nameComponent,
            [prop]: response[i]
        }
        return acc
    },[])

    return {
        props: {
            template,
            configurator
        }
    }
}