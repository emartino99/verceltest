import Image from "next/image";
import { getMediaPath } from "../../../utils";
import { IServicesItem, ISharepointStyle } from "../../../models";

interface ServicesItemProps {
    servicesItem: IServicesItem[] | undefined;
}

export const ServicesItem = ({servicesItem}: ServicesItemProps) => {

    const {
        Title,
        description,
        image,
        imageTitle,
        style
    } = servicesItem?.[0] || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        sectionStyle,
        titleStyle,
        descriptionStyle
    } = usableStyle || {};

    return (
        <section className="services-item span-1-12" style={{...sectionStyle}}>
            <header>
                <h1 style={{...titleStyle}}>{Title}</h1>
                <p style={{...descriptionStyle}}>{description}</p>
            </header>
            <aside>
                {image && <Image src={getMediaPath(image)} alt={imageTitle} layout='fill' objectFit="scale-down" />}
                <span>{imageTitle}</span>
            </aside>
        </section>
    );
};
