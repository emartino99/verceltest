import * as React from 'react';
import { useRouter } from "next/router";
import { INews } from "../../../models";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { CustomImage } from '../../atoms/CustomImage';

interface NewsProps {
    news: INews[] | undefined;
}

export const News = ({news}: NewsProps) => {

    const router = useRouter();
    const newsUrlHandler = (url: string) => router.push(url);

    return(
        <section className="news span-1-12">
            <header className="news-header">
                <h1>News</h1>
                <span 
                    className='pointer'
                    onClick={() => console.log("routing to be implemented")}
                >
                    Mostra tutte
                </span>
            </header>
            <Swiper 
                navigation={{
                  nextEl: ".custom-news-next-button",
                  prevEl: ".custom-news-prev-button"
                }}
                modules={[Navigation]} 
                slidesPerView={3}
                className='swiper-container'
            >
                {
                  news?.length && news.map(currentNews => (
                    <SwiperSlide key={currentNews.ID}>
                        <CustomImage
                            title={''}
                            relativePath={currentNews.BannerImageUrl}
                            width={300}
                            height={300} 
                            objectFit='cover' 
                            className='news-img' 
                            onClick={() => console.log("routing to be implemented")}
                        />
                        <article className="news-carousel-info-container">
                          <span>{currentNews.Topic}</span>
                          <div className='news-carousel-info-title'>
                            <h1 
                                className='pointer'
                                onClick={() => console.log("routing to be implemented")}
                            >
                                {currentNews.Title}
                            </h1>
                          </div>
                          <div className="news-carousel-description-container">
                            <p>{currentNews.Description}</p>
                          </div>
                        </article>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
            <div className="custom-news-prev-button custom-swiper-button">
                <div className='custom-prev-arrow'></div>
            </div>
            <div className="custom-news-next-button custom-swiper-button">
                <div className='custom-next-arrow'></div>
            </div>
        </section>
    );
};