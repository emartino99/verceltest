import { ICervelloneItem, ICervelloneMainSettings } from "../../../models";
import { CervelloneItem } from "../../molecule";

interface CervelloneProps {
    cervellone: ICervelloneItem[] | undefined;
    cervelloneMainSettings: ICervelloneMainSettings[] | undefined;
}

export const Cervellone = ({cervellone, cervelloneMainSettings}: CervelloneProps) => {

    const {
        Title,
        subtitle,
        description
    } = cervelloneMainSettings?.[0] || {};

    return (
        <section className="cervellone span-1-12">
            <header>
                <h1>{Title}</h1>
                <span>{subtitle}</span>
                <p>{description}</p>
            </header>
            <div className="cervellone-container">
                {
                    cervellone?.map((item, index) => {
                        const flexFlow = index % 2 !== 0 ? 'row-reverse wrap' : 'row wrap';
                        return(
                            <CervelloneItem 
                                key={item.ID} 
                                title={item.Title} 
                                image={item.image} 
                                description={item.description} 
                                flexFlow={flexFlow} 
                            />
                        )
                    })
                }
            </div>
        </section>
    );
};
