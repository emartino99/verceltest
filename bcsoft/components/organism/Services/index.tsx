import Image from "next/image";
import { useRouter } from "next/router";
import { IServices, IServicesMainSettings, ISharepointStyle } from "../../../models";
import { extractMultipleData, getMediaPath, extractData } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface ServicesProps {
    services: IServices[] | undefined;
    servicesMainSettings: IServicesMainSettings[] | undefined
}

export const Services = ({services, servicesMainSettings}: ServicesProps) => {

    const route = useRouter();
    const servicesExtracted: IServices[] = extractMultipleData(route, services);
    const servicesMainSettingsExtracted: IServicesMainSettings = extractData(route, servicesMainSettings);

    const {
        Title,
        description,
        subtitle,
        buttonLabel,
        buttonHref,
        style
    } = servicesMainSettingsExtracted || {};

    const { 
        backgroundColor, 
        titleStyle, 
        descriptionStyle,
        subtitleStyle
    }: ISharepointStyle = style && JSON.parse(style);

    return (
        <section className="services span-1-12" style={{backgroundColor: backgroundColor}}>
            <header>
                <h1 style={{...titleStyle}}>{Title}</h1>
                <p style={{...descriptionStyle}}>{description}</p>
                <span style={{...subtitleStyle}}>{subtitle}</span>
            </header>
            <div className="services-content">
                {
                    servicesExtracted?.map(card => {
                        const { cardStyle, titleStyle, descriptionStyle }: ISharepointStyle = card.style && JSON.parse(card.style);
                        return(
                            <article 
                                key={card.ID}
                                style={{...cardStyle}}
                            >
                                {
                                    card.image &&
                                        <div className="image-container">
                                            <Image src={getMediaPath(card.image)} alt={card.Title} layout="fill" objectFit='scale-down' />
                                        </div>
                                }
                            <h1 style={{...titleStyle}}>{card.Title}</h1>
                            <span style={{...descriptionStyle}}>{card.description}</span>
                            {card.descriptionHover && <p>{card.descriptionHover}</p>}
                        </article>
                        )
                    })
                }
            </div>
            {buttonLabel && <CustomButton title={buttonLabel} href={buttonHref} mainBackgroundColor={'#FFFFFF'} mainColor={'#001F3C'} />}
        </section>
    );
};