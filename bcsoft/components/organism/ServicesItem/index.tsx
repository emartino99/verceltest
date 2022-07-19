import Image from "next/image";
import { IServicesItem } from "../../../models";
import { getMediaPath } from "../../../utils";

interface ServicesItemProps {
    servicesItem: IServicesItem[] | undefined;
}

export const ServicesItem = ({servicesItem}: ServicesItemProps) => {

    const {
        Title,
        description,
        image,
        imageTitle,
        rotate,
        darkBackgroundColor
    } = servicesItem?.[0] || {};

    const backgroundColor = darkBackgroundColor === 'SI' ? '#001F3C' : '#C9E2FF';
    const mainTextColor = darkBackgroundColor === 'SI' ? '#FFFFFF' : '#002950';
    const secondaryTextColor = darkBackgroundColor === 'SI' ? '#FFFFFF' : '#185fa2';
    const flexDirection = rotate === 'SI' ? 'row-reverse' : 'row'; 

    return (
        <section className="services-item span-1-12" style={{backgroundColor: backgroundColor, flexDirection: flexDirection}}>
            <header>
                <h1 style={{color: mainTextColor}}>{Title}</h1>
                <p style={{color: secondaryTextColor}}>{description}</p>
            </header>
            <aside>
                {image && <Image src={getMediaPath(image)} alt={imageTitle} layout='fill' objectFit="scale-down" />}
                <span>{imageTitle}</span>
            </aside>
        </section>
    );
};
