import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { IAppDescription, IAppDescriptionMainSettings, ISharepointStyle } from '../../../models';
import { extractData, extractMultipleData, getMediaPath } from '../../../utils';

interface AppDescriptionProps {
    appDescription: IAppDescription[] | undefined;
    appDescriptionMainSettings: IAppDescriptionMainSettings[] | undefined;
}

export const AppDescription = ({appDescription, appDescriptionMainSettings}: AppDescriptionProps) => {

    const route = useRouter();
    const dataExtracted: IAppDescriptionMainSettings = extractData(route, appDescriptionMainSettings);
    const descriptionExtracted: IAppDescription[] = extractMultipleData(route, appDescription);

    const {
        Title,
        image
    } = dataExtracted || {};

    return (
        <section className='app span-1-12'>
            <header className='app-item'>
                {
                    descriptionExtracted?.map(item => {
                        const { titleStyle, descriptionStyle }: ISharepointStyle = item?.style && JSON.parse(item.style);
                        return (
                            <>
                                <h1 style={{...titleStyle}}>{item.Title}</h1>
                                <p  style={{...descriptionStyle}}>{item.description}</p>
                            </>
                        )
                    })
                }
            </header>
            <div className='app-item'>
                <Image src={getMediaPath(image)} alt={Title} layout='fill' objectFit='scale-down' />
            </div>
        </section>
    );
};