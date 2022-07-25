import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import { getMediaPath } from '../../../utils';
import { IProducts, IProductsMainSettings } from '../../../models';

interface ProductsProps {
    products: IProducts[] | undefined;
    productsMainSettings: IProductsMainSettings[] | undefined;
}

export const Products = ({products, productsMainSettings}: ProductsProps) => {

    const {
        Title,
        description
    } = productsMainSettings?.[0] || {};

    return (
        <section className="products span-1-12">
            <header>
                <p>{description}</p>
                <h1>{Title}</h1>
            </header>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                initialSlide={2} 
                loop={true}
                loopFillGroupWithBlank={true} 
                modules={[Navigation]}
                className='swiper-container'
            >
                {
                    products?.map( item => (
                        <SwiperSlide key={item.ID}>
                            <article className="swiper-slide-container">
                                <div className="swiper-slider-img-container">
                                    <Image src={getMediaPath(item.image)} alt={item.Title} objectFit='scale-down' layout="fill" priority={true} />
                                </div>
                            </article> 
                        </SwiperSlide>  
                    ))
                }
            </Swiper>
        </section>
    );
};
