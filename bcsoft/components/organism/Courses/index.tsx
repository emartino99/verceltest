import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import { ICourses, ICoursesMainSettings, ISharepointStyle } from '../../../models';
import { getMediaPath } from '../../../utils';
import { CustomButton } from '../../atoms/CustomButton';

interface Coursesprops {
    courses: ICourses[] | undefined;
    coursesMainSettings: ICoursesMainSettings[] | undefined;
};

export const Courses = ({ courses, coursesMainSettings }: Coursesprops) => {

    const [isFirefox, setIsFirefox] = useState<boolean>(true);

    const { 
        Title, 
        Description,
        buttonLabel,
        href,
        style
    } = coursesMainSettings?.[0] || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        titleStyle,
        descriptionStyle,
        backgroundColor,
        mainButtonBackgroundColor,
        mainButtonColor,
        outerButtonShadowColor,
        innerButtonShadowrColor,
        secondaryButtonBackgroundColor
    } = usableStyle || {};

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const isFirefox = !!userAgent.match(/firefox|fxios/i);
        setIsFirefox(isFirefox);
    }, []);

  return (
    <section className='courses span-1-12' style={{backgroundColor: backgroundColor}}>
        <header className='courses-header'>
            <h1 style={{...titleStyle}}>{Title}</h1>
            <p style={{...descriptionStyle}} >{Description}</p>
        </header>
        <Swiper
            navigation={{
                nextEl: ".courses-next-button-content",
                prevEl: ".courses-prev-button-content"
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            initialSlide={2}
            loop={!isFirefox}
            rewind={isFirefox}
            coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 140,
                modifier: 1,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            className='swiper-container'
        >
            {
            courses?.length && courses.map(currentCorso => (
                <SwiperSlide key={currentCorso.ID}>
                    <div className="swiper-slide-container">
                        <div className="swiper-slider-img-container">
                            <Image src={getMediaPath(currentCorso.CorsoImg)} alt={currentCorso.Title} objectFit='scale-down' layout="fill" priority={true} />
                        </div>
                    </div> 
                </SwiperSlide>
            ))
            }
        </Swiper>
        <div className="courses-prev-button-container">
            <div className='courses-prev-button-content'>
                    <div className='custom-prev-arrow'></div>
                </div>
            </div>

        <div className="courses-next-button-container">
            <div className='courses-next-button-content'>
                <div className='custom-next-arrow'></div>
            </div>
        </div>
        {
            buttonLabel && 
                <CustomButton 
                    title={buttonLabel} 
                    href={href} 
                    mainBackgroundColor={mainButtonBackgroundColor}
                    mainColor={mainButtonColor}
                    outerShadowColor={outerButtonShadowColor}
                    innerShadowrColor={innerButtonShadowrColor}
                    secondaryBackgroundColor={secondaryButtonBackgroundColor}
                />
        }
    </section>
  );
};


