import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { IHistoryCard, IHistoryMainSettings } from "../../../models";
import { HistoryCard, HistoryCarouselDescription } from "../../molecule";

const isEven = (number:number) => number % 2 ? true : false;

interface HistoryCardProps {
    historyCards: IHistoryCard[] | undefined;
    historyMainSettings: IHistoryMainSettings[] | undefined;
}

export const History = ({ historyCards, historyMainSettings }: HistoryCardProps) => {

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [hasBeenActive, setHasBeenActive] = useState<number[]>([0]);

  const {
    Title,
    description,
  } = historyMainSettings?.[0] || {};

  return (
    <section className='history span-1-12'>
        <header className="history-header">
            <h1 dangerouslySetInnerHTML={{  __html: Title ?? '' }}></h1>
            <span dangerouslySetInnerHTML={{  __html: description ?? '' }}></span>
        </header>
        <Swiper
            navigation={{
                nextEl: ".bcsoft-history-swiper-custom-next-button",
                prevEl: ".bcsoft-history-swiper-custom-prev-button"
            }}
            slidesPerView={5}
            centeredSlides={true}
            modules={[Navigation]}
            className='swiper-container'
            onSlideChange={(swiper) => {
                setActiveSlide(swiper.activeIndex);
                if(!hasBeenActive.includes(swiper.activeIndex)){
                    setHasBeenActive([...hasBeenActive, swiper.activeIndex]);
                }
            }}
        >
        {
            historyCards?.length && historyCards.map((currentCard, index) => (
                <SwiperSlide key={currentCard.ID}>
                    <HistoryCard 
                        isEven={isEven(index)} 
                        yearToShow={currentCard?.YearToShow.toString()} 
                        isTheLastOne={( historyCards.length - 1) === index }
                        isActive={activeSlide === index || hasBeenActive.includes(index)}
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>

        {
            historyCards?.length &&
                <HistoryCarouselDescription 
                    Title={historyCards[activeSlide].Title} 
                    Event={historyCards[activeSlide].Event} 
                    NumberOfEmployees={historyCards[activeSlide].NumberOfEmployees}
                />
        }
        
    </section>
  )
};
