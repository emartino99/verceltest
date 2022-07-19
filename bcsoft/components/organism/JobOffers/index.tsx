import Image from "next/image";
import { IJobOffers } from "../../../models";
import { CustomButton } from "../../atoms/CustomButton";
import { useRouter } from "next/router";
import { getMediaPath } from "../../../utils";

interface JobOffersProps {
    jobOffers: IJobOffers[] | undefined;
}

export const JobOffers = ({jobOffers}: JobOffersProps) => {

    const router = useRouter();
    const buttonRedirect = () => router.push('jobs');

    return (
        <section className="job span-1-12">
            <header>
                <h1>OFFERTE DI LAVORO</h1>
                <h2>Costruisci il tuo futuro insieme a noi</h2>
            </header>
            <div className="job-container">
                {
                    jobOffers?.map(card => (
                        <article className="job-article" key={card.ID}>
                            <div className="job-type">
                                <div className="job-image">
                                    <Image src={getMediaPath(card.image)} alt={card.Title} layout="fill" objectFit="scale-down" />
                                </div>
                                <div className="job-description">
                                    <h1>{card.Title}</h1>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                           {
                            card.buttonHref && card.buttonLabel &&
                                <div className="job-button" >
                                    <CustomButton title={card.buttonLabel} href={card.buttonHref} mainBackgroundColor={'#FFFFFF'} mainColor={'#001F3C'} />
                                </div>
                           }
                        </article>
                    ))
                }
                <span className="pointer" onClick={buttonRedirect} >Mostra altro</span>
            </div>
        </section>
    );
};
