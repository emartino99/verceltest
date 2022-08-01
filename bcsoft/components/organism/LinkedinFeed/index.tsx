import Image from "next/image";
import { ILinkedinFeed, ILinkedinFeedMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";

interface LinkedinFeedProps {
    linkedinFeed: ILinkedinFeed[] | undefined;
    linkedinFeedMainSettings: ILinkedinFeedMainSettings[] | undefined;
}

export const LinkedinFeed = ({linkedinFeed, linkedinFeedMainSettings}: LinkedinFeedProps) => {

    const {
        Title,
        subtitle
    } = linkedinFeedMainSettings?.[0] || {};

    const redirectHandler = (url: string) => window.location.href = url;

    return (
        <section className="linkedin-feed span-1-12">
            <header>
                <h1>{Title}</h1>
                <h2>{subtitle}</h2>
            </header>
            <div className="linkedin-feed-content">
                {
                    linkedinFeed?.map(card => (
                        <div 
                            className="linkedin-feed-card pointer"
                            onClick={() => redirectHandler(card.redirectTo)}
                            key={card.ID}
                        >
                            <Image src={getMediaPath(card.image)} alt={card.Title} layout='fill' objectFit="scale-down" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
