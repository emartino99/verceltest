import * as React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { EffectCoverflow, Navigation } from 'swiper';
import { BcButton } from 'bc-button';
import { getCorsi } from '../service';
import { ICorsi } from '../models';
import { parseImgJson } from '../utilis';
import { IHomeCorsiCarouselProps } from './IHomeCorsiCarouselProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/HomeCorsiCarousel.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

const HomeCorsiCarousel: React.FC<IHomeCorsiCarouselProps> = (props) => {
  
  const [corsi, setCorsi] = useState<ICorsi[]>([]);

  const {
    backgroundColor,
    titleColor,
    title,
    subtitleColor,
    subtitle,
    buttonText,
    buttonLink,
    buttonStyle,
    context,
    sp
  } = props;

  const getCorsiList = async () => {
    const result: ICorsi[] = await getCorsi(sp);
    const resultWithUsableIMG = parseImgJson(result);
    setCorsi(resultWithUsableIMG);
  };

  useEffect(() => {
    getCorsiList();
  }, []);

  return (
    <div className="section" style={{ backgroundColor: backgroundColor ?? 'transparent' }}>
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <h2 className='sectionTitle text-center' style={{ color: titleColor ?? "black" }}>{title}</h2>
          <span className='sectionSubtitle text-center mb-5' style={{ color: subtitleColor ?? "black" }} dangerouslySetInnerHTML={{ __html: subtitle }}></span>
            <div className="swiper-container">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                initialSlide={2}
                loop={true}
                loopFillGroupWithBlank={true}
                coverflowEffect={{
                  rotate: 25,
                  stretch: 0,
                  depth: 250,
                  modifier: 1,
                  slideShadows: false,
                }}
                 breakpoints={{
                   700: {
                     slidesPerView: 1,
                     spaceBetween: 0,
                     coverflowEffect: {
                       depth: 100
                     }
                   },
                   1000: {
                     slidesPerView: 3,
                     spaceBetween: 25,
                     coverflowEffect: {
                      depth: 85
                    }
                   },
                   1351: {
                    slidesPerView: 4,
                     spaceBetween: 25,
                     coverflowEffect: {
                      depth: 155
                    }
                   },
                 }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
              >
                {
                  corsi.length && corsi.map(currentCorso => (
                    <SwiperSlide>
                      <div className="swiper-slide-container d-flex justify-content-center align-items-center">
                        <div className="swiper-slider-img-container">
                          <img src={currentCorso.CorsoImg} alt={currentCorso.Title} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className="d-flex justify-content-center align-items-center custom-button-container">
              <BcButton label={buttonText} enableLink={true} href={buttonLink} buttonClass={buttonStyle} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCorsiCarousel;
