import * as React from 'react';
import { useState, useEffect } from 'react';
import HistoryCard from './HistoryCard';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';
import { IBcsoftHistoryProps } from './IBcsoftHistoryProps';
import { getHistoryCards } from '../service';
import { IHistoryCard } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

const isEven = (number:number) => number % 2 ? true : false;

const BcsoftHistory:React.FC<IBcsoftHistoryProps> = (props) => {

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [hasBeenActive, setHasBeenActive] = useState<number[]>([0]);
  const [historyCards, setHistoryCards] = useState<IHistoryCard[]>([]);

  const {
    backgroundColor,
    title,
    titleColor,
    titleSize,
    titleWeight,
    description,
    descriptionColor,
    descriptionSize,
    descriptionWeight,
    textAlign,
    sp
  } = props;

  const historyCardService = async () => {
    const result = await getHistoryCards(sp);
    setHistoryCards(result);
  };

  useEffect(() => {
    historyCardService();
  }, []);

  return(
    <div 
      className='d-flex flex-column justify-content-center align-items-center' 
      style={{ backgroundColor: backgroundColor ,height: 600}}
    >
      <div
        className={`text-${textAlign}`} 
        style={{width: '75%', padding: '2em'}}>
          <h2 
            className={`${titleWeight}`} 
            style={{ color: titleColor, fontSize: titleSize.toString() + "em" }} 
            dangerouslySetInnerHTML={{  __html: title }}>
          </h2>
          <span 
            className={`${descriptionWeight} mb-5`} 
            style={{ color:descriptionColor, fontSize: descriptionSize.toString() + "em" }} 
            dangerouslySetInnerHTML={{  __html: description }}>
          </span>
      </div>
      <div className='bcsoft-history-swiper-container'>
          <Swiper 
            navigation={{
              nextEl: ".bcsoft-history-swiper-custom-next-button",
              prevEl: ".bcsoft-history-swiper-custom-prev-button"
            }}
            modules={[Navigation]} 
            slidesPerView={1}
            spaceBetween={0}
            initialSlide={0}
            centeredSlides={true}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
              if(!hasBeenActive.includes(swiper.activeIndex)){
                setHasBeenActive([...hasBeenActive, swiper.activeIndex]);
              }
            }}
            breakpoints={{
              930: {
                slidesPerView: 3
              },
              320: {
                slidesPerView: 2
              }
            }}
          >
            {
              historyCards.length && historyCards.map((currentCard, index) => (
                <SwiperSlide className='d-flex justify-content-start align-items-center' style={{height: 300}}>
                  <HistoryCard 
                    isEven={isEven(index)} 
                    yearToShow={currentCard.YearToShow.toString()} 
                    isTheLastOne={( historyCards.length - 1) === index }
                    isActive={activeSlide === index || hasBeenActive.includes(index)}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="bcsoft-history-swiper-custom-prev-button-wrapper">
            <div className="bcsoft-history-swiper-custom-prev-button d-flex justify-content-center align-items-center">
              <div className='bcsoft-history-swiper-custom-prev-arrow'></div>
            </div>
          </div>
          {
            historyCards.length ? 
              <div className='d-flex flex-nowrap justify-content-center align-items-start bcsoft-history-swiper-description-container'>
                <div>
                  <div style={{width: 28}}>
                    <img src={require('../img/world.png')} alt="world" />
                  </div>
                </div>
                <div className='d-flex flex-wrap justify-content-start align-items-start'>
                  <span>{historyCards[activeSlide].Title}</span>
                  <span>{historyCards[activeSlide].Event}</span>
                  <span>{historyCards[activeSlide].NumberOfEmployees}</span>
                </div>
              </div>
              :
              <div></div>
          }
          <div className="bcsoft-history-swiper-custom-next-button-wrapper">
            <div className="bcsoft-history-swiper-custom-next-button d-flex justify-content-center align-items-center">
              <div className='bcsoft-history-swiper-custom-next-arrow'></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BcsoftHistory;