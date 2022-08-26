import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { IInfo, ISharepointStyle } from '../../../models';
import { extractData } from '../../../utils';

interface InfoProps {
    info: IInfo[] | undefined;
}

export const Info = ({info}: InfoProps) => {

    const route = useRouter();
    const dataExtracted: IInfo = extractData(route, info);

    const {
        Title,
        firstDescription,
        secondTitle,
        secondDescription,
        style
    } = dataExtracted || {};

    const firstDescriptionRef = useRef<HTMLDivElement>(null);
    const secondDescriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(firstDescriptionRef.current && firstDescription) {
            firstDescriptionRef.current.innerHTML = firstDescription;
        }
        if(secondDescriptionRef.current && secondDescription) {
            secondDescriptionRef.current.innerHTML = secondDescription;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { titleStyle, descriptionStyle }: ISharepointStyle = style && JSON.parse(style);

    return (
        <section className='info span-1-12'>
            <header>
                <div>
                    <h1 style={{...titleStyle}}>{Title}</h1>
                    <div ref={firstDescriptionRef} style={{...descriptionStyle}}></div>
                </div>

                <div>
                    <h1 style={{...titleStyle}}>{secondTitle}</h1>
                    <div ref={secondDescriptionRef} style={{...descriptionStyle}}></div>
                </div>
            </header>
        </section>
    );
};