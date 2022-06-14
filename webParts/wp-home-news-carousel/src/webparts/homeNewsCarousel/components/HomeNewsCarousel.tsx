import * as React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';
import { IHomeNewsCarouselProps } from './IHomeNewsCarouselProps';
import {
  getNews,
  getNewsFromAList
} from '../service';
import { INews } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/HomeNewsCarousel.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

const HomeNewsCarousel: React.FC<IHomeNewsCarouselProps> = (props) => {

  const [news, setNews] = useState<INews[]>([]);

  const { 
    backgroundColor, 
    titleColor, 
    title, 
    descriptionColor, 
    description,
    descriptionUrl,
    shouldWorkFromList,
    context,
    sp,
  } = props;

  const originTenant = context.pageContext.web.absoluteUrl;

  //this is the portion of text that has to be removed from the news's result in order to get a good quality image
  const textToRemoveFromImgUrl = "_layouts/15/getpreview.ashx?path=";

  /* May happen that a news couldn't have an image, in this case we'll use a default image to avoid this problem.
  the image has of course to exist into some dir of sharepoint online to work */
  const defaultImgPath = `${originTenant}/SiteAssets/DEFAULT_NEWS_IMAGE.jpg`;

  const getLatestNews = async () => {
    const newsResult = shouldWorkFromList ? await getNewsFromAList(context, sp) : await getNews(context, sp);
    setNews(newsResult);
  };

  useEffect(() => {
    getLatestNews();
  }, [shouldWorkFromList]);

  // the goal of this function is to handle the url and also an underline based on the description passed by the panel control.
  const showDescriptionUnderline = descriptionUrl.trim();
  const descriptionUrlHandler = () => showDescriptionUnderline && window.open(descriptionUrl, '_blank');

  const newsUrlHandler = (url:string) => window.open(url, '_blank');

  return(
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <h2 
            className='sectionTitle text-center' 
            style={{ color: titleColor }}>
              {title}
          </h2>
          <span 
            className={`sectionSubtitle text-center mb-5 ${showDescriptionUnderline && 'descriptionUrlLink'}`}
            style={{ color: descriptionColor }} 
            dangerouslySetInnerHTML={{ __html: description }}
            onClick={descriptionUrlHandler}>
          </span>
          <div className='news-swiper-container'>
            <Swiper 
                navigation={{
                  nextEl: ".custom-next-button",
                  prevEl: ".custom-prev-button"
                }}
                modules={[Navigation]} 
                slidesPerView={1}
                spaceBetween={25}
                breakpoints={{
                  1000: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1050: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1325: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                }}>
                {
                  news.length && news.map(currentNews => (
                    <SwiperSlide>
                      <div style={{height: 610}}>
                        <div 
                          className="news-carousel-img"
                          onClick={() => newsUrlHandler(currentNews.FileRef)}>
                          <img src={
                            currentNews.BannerImageUrl.Url.includes('sitepagethumbnail.png') 
                            ? defaultImgPath 
                            : currentNews.BannerImageUrl.Url.replace(textToRemoveFromImgUrl, '')
                          } 
                            alt={currentNews.Title} />
                        </div>
                        <div className="news-carousel-info-container">
                          <span>prova topic</span>
                          <div 
                            onClick={() => newsUrlHandler(currentNews.FileRef)}
                            className='news-carousel-info-title'>
                            <h1>{currentNews.Title}</h1>
                          </div>
                          <div className="news-carousel-description-container">
                            <p>{currentNews.Description}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
            <div className="custom-prev-button d-flex justify-content-center align-items-center">
              <div className='custom-prev-arrow'></div>
            </div>
            <div className="custom-next-button d-flex justify-content-center align-items-center">
              <div className='custom-next-arrow'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCarousel;
