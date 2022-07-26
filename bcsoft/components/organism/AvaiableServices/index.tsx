import { IAvaiableServicesMainSettings, ICardAvaiableService } from "../../../models";
import { CardAvaiableServices, HeaderAvaiableServices } from "../../molecule";

interface AvaiableServicesProps {
    cardAvaiableService: ICardAvaiableService[] | undefined;
    avaiableServicesMainSettings: IAvaiableServicesMainSettings[] | undefined;
}

export const AvaiableServices = ({cardAvaiableService, avaiableServicesMainSettings}: AvaiableServicesProps) => {

    const {
        Title,
        titleColor,
        description,
        image,
        buttonLabel,
        buttonHref,
        rotate,
    } = avaiableServicesMainSettings?.[0] || {};

    const flexDirection = rotate === 'NO' ? 'row wrap' : 'row-reverse wrap';

    return (
        <section 
            className="avaiable-services span-1-12"
            style={{flexFlow: flexDirection}}
        >
            <div className="avaiable-services-item">
                {
                    cardAvaiableService?.map(card => (
                        <CardAvaiableServices
                            key={card.ID}
                            title={card.Title} 
                            backgroundColor={card.backgroundColor} 
                            borderColor={card.borderColor}
                            flexDirection={card.flexDirection}
                            image={card.image}
                            cardMinHeight={card.cardMinHeight}
                            textColor={card.textColor}
                            cardPosition={card.cardPosition}
                        />
                    ))
                }
            </div>
            <div className="avaiable-services-item">
                <HeaderAvaiableServices 
                    title={Title}
                    titleColor={titleColor}
                    description={description} 
                    image={image} 
                    buttonLabel={buttonLabel} 
                    buttonHref={buttonHref} 
                />
            </div>
        </section>
    );
};
