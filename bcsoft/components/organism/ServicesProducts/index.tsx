import { ICardServicesProducts, IServicesProductsMainSettings } from "../../../models";
import { CardServicesProducts } from "../../molecule";

interface ServicesProductsProps {
    cardsServices: ICardServicesProducts[] | undefined;
    servicesProductsMainSetting: IServicesProductsMainSettings[] | undefined;
}

export const ServicesProducts = ({cardsServices, servicesProductsMainSetting}: ServicesProductsProps) => {

    const {
        Title,
        description
    } = servicesProductsMainSetting?.[0] || {};
    return (
        <section className="services-products span-1-12">
            <header>
                <h1>{Title}</h1>
                <p>{description}</p>
            </header>
            <div className="services-products-content">
                {
                    cardsServices?.map(card => 
                        <CardServicesProducts 
                            key={card.ID}
                            title={card.Title}
                            description={card.description} 
                            image={card.image}
                            backgroundColor={card.backgroundColor}
                        />
                    )
                }
            </div>
        </section>
    );
};