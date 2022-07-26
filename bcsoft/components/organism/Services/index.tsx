import Image from "next/image";
import { IServices, IServicesMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface ServicesProps {
    services: IServices[] | undefined;
    servicesMainSettings: IServicesMainSettings[] | undefined
}

export const Services = ({services, servicesMainSettings}: ServicesProps) => {

    const {
        Title,
        description,
        subtitle,
        buttonLabel,
        buttonHref,
        darkBackgroundColor
    } = servicesMainSettings?.[0] || {};
    
    const backgroundColor = darkBackgroundColor === 'SI' ? '#001F3C' : '#C9E2FF66';
    const mainTitleTextColor = darkBackgroundColor === 'SI' ? '#FFFFFF' : '#002950';
    const textColor = darkBackgroundColor === 'SI' ? '#FFFFFF' : '#185fa2';

    return (
        <section className="services span-1-12" style={{backgroundColor: backgroundColor}}>
            <header>
                <h1 style={{color: mainTitleTextColor}}>{Title}</h1>
                <p style={{color: textColor}}>{description}</p>
                <span style={{color: textColor}}>{subtitle}</span>
            </header>
            <div className="services-content">
                {
                    services?.map(card => {
                        console.log(card);
                        const backgroundColor = card.whiteBackgroundColor === 'SI' ? '#FFFFFF' : '#001F3C';
                        const textColor = card.whiteBackgroundColor === 'SI' ? '#001F3C' : '#FFFFFF';
                        return(
                            <article 
                                key={card.ID}
                                style={{backgroundColor: backgroundColor, minHeight: card.cardMinHeight}}
                            >
                                {
                                    card.image &&
                                        <div className="image-container">
                                            <Image src={getMediaPath(card.image)} alt={card.Title} layout="fill" objectFit='scale-down' />
                                        </div>
                                }
                            <h1 style={{color: textColor}}>{card.Title}</h1>
                            {card.descriptionHover && <p style={{color: textColor}}>{card.descriptionHover}</p>}
                        </article>
                        )
                    })
                }
            </div>
            {buttonLabel && buttonHref && <CustomButton title={buttonLabel} href={buttonHref} mainBackgroundColor={'#FFFFFF'} mainColor={'#001F3C'} />}
        </section>
    );
};