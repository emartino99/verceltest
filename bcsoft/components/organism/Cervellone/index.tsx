import { useRef, useEffect } from "react";
import { ICervelloneItem, ICervelloneMainSettings } from "../../../models";
import { CervelloneItem } from "../../molecule";

interface CervelloneProps {
    cervellone: ICervelloneItem[] | undefined;
    cervelloneMainSettings: ICervelloneMainSettings[] | undefined;
}

export const Cervellone = ({cervellone, cervelloneMainSettings}: CervelloneProps) => {

    const descriptionRef = useRef<HTMLDivElement>(null);

    const {
        Title,
        subtitle,
        description
    } = cervelloneMainSettings?.[0] || {};

    useEffect(() => {
        if(descriptionRef.current && description) {
            descriptionRef.current.innerHTML = description;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="cervellone span-1-12">
            <header>
                <h1>{Title}</h1>
                <span>{subtitle}</span>
                <p ref={descriptionRef}></p>
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
