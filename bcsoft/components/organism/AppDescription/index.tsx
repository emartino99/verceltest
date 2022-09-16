import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { IAppDescription, ISharepointStyle } from '../../../models';
import { extractData, getMediaPath } from '../../../utils';

interface AppDescriptionProps {
    appDescription: IAppDescription[] | undefined;
}

export const AppDescription = ({appDescription}: AppDescriptionProps) => {

    const route = useRouter();
    const dataExtracted: IAppDescription = extractData(route, appDescription);

    const {
        Title,
        firstDescription,
        secondTitle,
        secondDescription,
        image,
        imageALT,
        style
    } = dataExtracted || {};

    const firstDescriptionRef = useRef<HTMLDivElement>(null);
    const secondDescriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(firstDescriptionRef.current) {
            firstDescription ? firstDescriptionRef.current.innerHTML = firstDescription : firstDescriptionRef.current.innerHTML = '';
        } 
        if(secondDescriptionRef.current) {
            secondDescription ? secondDescriptionRef.current.innerHTML = secondDescription : secondDescriptionRef.current.innerHTML = '';
        } 
    }, [firstDescription, secondDescription]);

    const {
        headerStyle,
        titleStyle, 
        descriptionStyle 
    }: ISharepointStyle = style && JSON.parse(style);

    return (
        <section className='app span-1-12'>
            <header className='app-item' style={{...headerStyle}}>
                <div>
                    <h1 style={{...titleStyle}}>{Title}</h1>
                    <div ref={firstDescriptionRef} style={{...descriptionStyle}}></div>
                </div>

                <div>
                    <h1 style={{...titleStyle}}>{secondTitle}</h1>
                    <div ref={secondDescriptionRef} style={{...descriptionStyle}}></div>
                </div>
            </header>
            {   image && 
                    <div className='app-item'>
                        <Image src={getMediaPath(image)} alt={imageALT} layout='fill' objectFit='scale-down' priority/>
                    </div>
            }
        </section>
    );
};