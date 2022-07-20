import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import { ICourses, ICoursesMainSettings } from '../../../models';
import Image from 'next/image';
import { getMediaPath } from '../../../utils';
import { CustomButton } from '../../atoms/CustomButton';

interface Coursesprops {
    courses: ICourses[] | undefined;
    coursesMainSettings: ICoursesMainSettings[] | undefined;
};

export const Courses = ({ courses, coursesMainSettings }: Coursesprops) => {

    const { 
        Title, 
        Description,
        buttonLabel,
        href,
        backgroundColor
    } = coursesMainSettings?.[0] || {}

    const mainColor = backgroundColor === '#001F3C' ? '#FFFFFF' : '#002950';
    const secondaryColor = backgroundColor === '#001F3C' ? '#FFFFFF' : '#001F3C';
    const buttonTextColor = backgroundColor === '#001F3C' ? '#001F3C' : '#FFFFFF';

  return (
    <section className='courses span-1-12' style={{backgroundColor: backgroundColor}}>
        <header className='courses-header'>
            <h1 style={{color: mainColor}}>{Title}</h1>
            <p style={{color: secondaryColor}} >{Description}</p>
        </header>
        <Swiper
            navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button"
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            initialSlide={2} 
            loop={true}
            loopFillGroupWithBlank={true} 
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
        <div className="custom-prev-button custom-swiper-button">
            <div className='custom-prev-arrow'></div>
        </div>
        <div className="custom-next-button custom-swiper-button">
            <div className='custom-next-arrow'></div>
        </div>
        <CustomButton 
            title={buttonLabel}
            href={href} 
            outerShadowColor={"#002950"} 
            innerShadowrColor={"#5b9ce7"} 
            mainBackgroundColor={mainColor}
            mainColor={buttonTextColor}
        />
    </section>
  );
};


