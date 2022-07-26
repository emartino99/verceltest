import Image from "next/image";
import { getMediaPath } from "../../../utils";

interface CardServicesProductsProps {
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
}

export const CardServicesProducts = ({title, description, image, backgroundColor}: CardServicesProductsProps) => {

    const textColor = backgroundColor === '#001F3C' ? '#FFFFFF' : '#002950';
    const secondaryTextColor = backgroundColor === '#001F3C' ? '#FFFFFF' : '#001F3C';
    const dotsColor = backgroundColor === '#001F3C' ? '#acd0fb' : '#001f3c';

    return (
        <article className="services-products-card" style={{backgroundColor: backgroundColor}}>
            <div className="services-products-card-header">
                <div className="services-products-card-header-item image">
                    <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" />
                </div>
                <div className="services-products-card-header-item">
                    <h1 style={{color: textColor}}>{title}</h1>
                </div>
            </div>
            <div className="services-products-card-dots" style={{color: dotsColor}}></div>
            <p style={{color: secondaryTextColor}}>{description}</p>
        </article>
    );
};
