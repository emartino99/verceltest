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
        headerStyle,
        backgroundColor, 
        titleStyle, 
        descriptionStyle,
        subtitleStyle,
        containerStyle,
        mainButtonBackgroundColor,
        mainButtonColor,
        outerButtonShadowColor,
        innerButtonShadowrColor,
        secondaryButtonBackgroundColor
    }: ISharepointStyle = style && JSON.parse(style);

    return (
        <section className="services span-1-12" style={{backgroundColor: backgroundColor}}>
            <header style={{...headerStyle}}>
                <h1 style={{...titleStyle}}>{Title}</h1>
                <p style={{...descriptionStyle}}>{description}</p>
                <span style={{...subtitleStyle}}>{subtitle}</span>
            </header>
            <div className="services-content" style={{...containerStyle}}>
                {
                    servicesExtracted?.map(card => {
                        const { cardStyle, titleStyle, descriptionStyle }: ISharepointStyle = card.style && JSON.parse(card.style);
                        return(
                            <div 
                                key={card.ID}
                                style={{...cardStyle}}
                                className="card-content"
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
                        </div>
                        )
                    })
                }
            </div>
            {
                    buttonLabel && 
                        <CustomButton 
                            title={buttonLabel} 
                            href={buttonHref} 
                            mainBackgroundColor={mainButtonBackgroundColor}
                            mainColor={mainButtonColor}
                            outerShadowColor={outerButtonShadowColor}
                            innerShadowrColor={innerButtonShadowrColor}
                            secondaryBackgroundColor={secondaryButtonBackgroundColor}
                        />
                }
        </section>
    );
};