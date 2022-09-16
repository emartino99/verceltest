import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CustomButton } from "../../atoms/CustomButton";
import { IJobOffers } from "../../../models";
import { getMediaPath } from "../../../utils";

interface JobOffersProps {
    jobOffers: IJobOffers[] | undefined;
}

export const JobOffers = ({jobOffers}: JobOffersProps) => {

    const [offers, setOffers] = useState<IJobOffers[]>([]);

    const retrieveOffers = useCallback(() => {
        if ( !jobOffers || offers.length === jobOffers.length ) return;

        const jobsArray:IJobOffers[] = [];
        const indexToReach = offers.length + 5;

        for (let i = offers.length; i < jobOffers.length; i++) {
            if (i > indexToReach) break;
            jobsArray.push(jobOffers[i]);
        }

        setOffers(prevState => [...prevState, ...jobsArray]);
    }, [jobOffers, offers]);


    useEffect(() => {
        retrieveOffers();

        return () => setOffers([]);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="job span-1-12">
            <header>
                <h1>OFFERTE DI LAVORO</h1>
                <h2>Costruisci il tuo futuro insieme a noi</h2>
            </header>
            <div className="job-container">
                {
                    offers?.map(card => (
                        <article className="job-article" key={card.ID}>
                            <div className="job-type">
                                <div className="job-image">
                                    { card.image && <Image src={getMediaPath(card.image)} alt={card.Title} layout="fill" objectFit="scale-down" /> }
                                </div>
                                <div className="job-description">
                                    <h1>{card.Title}</h1>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                           {
                            card.buttonLabel &&
                                <div className="job-button" >
                                    <CustomButton 
                                        title={card.buttonLabel} 
                                        href={card.buttonHref} 
                                        mainBackgroundColor={'#FFFFFF'} 
                                        mainColor={'#001F3C'}
                                        innerShadowrColor={'#ACD0FB'}
                                        outerShadowColor={'#001F3C'}
                                        secondaryBackgroundColor={true}
                                    />
                                </div>
                           }
                        </article>
                    ))
                }
                <span className="pointer" onClick={retrieveOffers} >Mostra altro</span>
            </div>
        </section>
    );
};
