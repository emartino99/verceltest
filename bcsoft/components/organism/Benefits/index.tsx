import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ISharepointListStyle, IBenefits, ISharepointStyle } from '../../../models';
import { extractData, extractMultipleData, getMediaPath } from '../../../utils';

interface BenefitsProps {
    benefits: IBenefits;
    benefitsMainSettings: ISharepointListStyle;
}

export const Benefits = ({benefits, benefitsMainSettings}: BenefitsProps) => {

    // fix to avoid hydratation's error
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const route = useRouter();
    const extractedBenefitsMainSettings: ISharepointListStyle  = extractData(route, benefitsMainSettings);
    const extractedBenefits: IBenefits[] = extractMultipleData(route, benefits);

    const {
        Title,
        style
    } = extractedBenefitsMainSettings || {};

    const {
        headerStyle,
        titleStyle,
        backgroundColor
    }: ISharepointStyle = style && JSON.parse(style);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <>
            {
                isMounted 
                    ?   <section className='benefits span-1-12' style={{backgroundColor: backgroundColor}}>
                            <header style={{...headerStyle}}>
                                <h1 style={{...titleStyle}}>{Title}</h1>
                            </header>
                                {
                                    extractedBenefits?.map(item => {

                                        const {
                                            titleStyle, 
                                            descriptionStyle,
                                            flexFlow
                                        }: ISharepointStyle = item.style && JSON.parse(item.style);

                                        return (
                                            <div className='benefits-banner' key={item.ID} style={{flexFlow: flexFlow}} >
                                                <div className="benefits-banner-text">
                                                    <h1 style={{...titleStyle}}>{item.Title}</h1>
                                                    <p style={{...descriptionStyle}} dangerouslySetInnerHTML={{  __html: item.description ?? '' }}></p>
                                                </div>
                                                <div className={`benefits-banner-image ${flexFlow === 'row-reverse wrap' ? 'move-left' : 'move-right' } }`} >
                                                    <Image src={getMediaPath(item.image)} alt={item.Title} layout='fill' objectFit='scale-down' />
                                                </div>
                                            </div>
                                        )

                                    }) 
                                }
                        </section>
                : null
            }
        </>
    );
};
