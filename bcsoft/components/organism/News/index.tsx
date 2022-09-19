import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from "next/router";
import { INews } from "../../../models";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { CustomImage } from '../../atoms/CustomImage';

interface NewsProps {
    news: INews[] | undefined;
}

export const News = ({news}: NewsProps) => {

    const [filteredNews, setFilteredNews] = useState<INews[]>();

    const getFilteredNews = useCallback(() => {
        const newsNewestToOldest = news?.sort((a,b) => Date.parse(b.FirstPublishedDate) - Date.parse(a.FirstPublishedDate)).filter((_item, index) => index <= 5);
        setFilteredNews(newsNewestToOldest);
    }, [news]);

    const router = useRouter();
    const newsUrlHandler = (url: string) => router.push(url);

    useEffect(() => {
        getFilteredNews();
    }, [getFilteredNews]);

    return(
        <section className="news span-1-12">
            <header className="news-header">
                <h1>News</h1>
                <span 
                    className='pointer'
                    onClick={() => newsUrlHandler('/News')}
                >
                    Mostra tutte
                </span>
            </header>
            <Swiper 
                navigation={{
                    nextEl: ".news-next-button-content",
                    prevEl: ".news-prev-button-content"
                }}
                modules={[Navigation]} 
                slidesPerView={3}
                className='swiper-container'
            >
                {
                  filteredNews?.length && filteredNews.map(currentNews => (
                    <SwiperSlide key={currentNews.ID}>
                        <CustomImage
                            title={''}
                            relativePath={currentNews.BannerImageUrl}
                            width={300}
                            height={300} 
                            objectFit='cover' 
                            className='news-img' 
                            onClick={() => newsUrlHandler(currentNews.FileRef0)}
                        />
                        <article className="news-carousel-info-container">
                          <span>{currentNews.Topic}</span>
                          <div className='news-carousel-info-title'>
                            <h1 
                                className='pointer'
                                onClick={() => newsUrlHandler(currentNews.FileRef0)}
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
            <div className="news-prev-button-container">
                <div className='news-prev-button-content'>
                    <div className='custom-prev-arrow'></div>
                </div>
            </div>

            <div className="news-next-button-container">
                <div className='news-next-button-content'>
                    <div className='custom-next-arrow'></div>
                </div>
            </div>
        </section>
    );
};