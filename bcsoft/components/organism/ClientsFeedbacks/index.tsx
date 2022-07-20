import Image from "next/image";
import { IFeedbacks, IFeedbacksMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface FeedbacksProps {
    feedbacks: IFeedbacks[] | undefined;
    feedbacksMainSettings: IFeedbacksMainSettings[] | undefined;
}

export const ClientsFeedbacks = ({feedbacks, feedbacksMainSettings}: FeedbacksProps) => {

    const {
        Title,
        subtitle,
        description
    } = feedbacksMainSettings?.[0] || {};

    return (
        <section className="feedbacks span-1-12">
            <header>
                <span>{subtitle}</span>
                <h1>{Title}</h1>
                <p>{description}</p>
            </header>
            <div className="feedbacks-container">
                {
                    feedbacks?.map(card => (
                        <article className="feedbacks-card" key={card.ID}>
                            <div className="feedback-image">
                                <Image src={getMediaPath(card.image)} alt={card.Title || card.mainTitle} layout="fill" objectFit="scale-down"/>
                            </div>
                            <h1>{card.mainTitle}</h1>
                            <p>{card.description}</p>
                            <span className="feedback-owner">{card.Title}</span>
                            <span>{card.company}</span>
                            {
                                card.buttonLabel && card.buttonHref &&
                                    <div style={{width: 198}}>
                                        <CustomButton 
                                            title={card.buttonLabel}
                                            href={card.buttonHref} 
                                            mainBackgroundColor={'#FFFFFF'} 
                                            mainColor={'#001F3C'} 
                                        />
                                    </div>
                            }
                        </article>
                    ))
                }
            </div>
        </section>
    );
};