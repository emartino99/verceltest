import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { INewsDetails, ISharepointStyle } from '../../../models';
import { extractMultipleData, getMediaPath } from '../../../utils';

interface NewsDetailsProps {
    newsDetails: INewsDetails[] | undefined;
}

export const NewsDetails = ({newsDetails}: NewsDetailsProps) => {

    const [isMounted, setIsMounted] = useState<boolean>(false); 

    const route = useRouter();
    const newsDetailsExtracted:INewsDetails[] = extractMultipleData(route, newsDetails);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className='news-details span-1-12'>
            {
                isMounted ? newsDetailsExtracted?.map(item => {

                    const {
                        containerStyle,
                        descriptionStyle,
                        imageStyle
                    }: ISharepointStyle = item.style ? JSON.parse(item.style) : {};

                    return (
                        <div className='news-details-content' style={{...containerStyle}} key={item.ID}>
                            <span className='news-details-info' dangerouslySetInnerHTML={{__html: item.info ?? ''}}></span>
                            {
                                item.Image && 
                                    <div className='news-details-image' style={{...imageStyle}}>
                                        <Image src={getMediaPath(item.Image)} alt={item.ImageALT} layout='fill' objectFit='cover' />
                                    </div>
                            }
                            <p className='news-details-description' style={{...descriptionStyle}} dangerouslySetInnerHTML={{__html: item.description}}></p>
                        </div>
                    )
               })
               : null
            }
        </section>
    );
};
