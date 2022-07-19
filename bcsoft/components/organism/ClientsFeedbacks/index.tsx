import Image from "next/image";
import { IFeedbacks, IFeedbacksMainSettings } from "../../../models";

interface FeedbacksProps {
    feedbacks: IFeedbacks[] | undefined;
    feedbacksMainSettings: IFeedbacksMainSettings[] | undefined;
}

export const ClientsFeedbacks = ({feedbacks, feedbacksMainSettings}: FeedbacksProps) => {

    const {
        Title,
        description
    } = feedbacksMainSettings?.[0] || {};

    return (
        <section className="feedbacks span-1-12">
            <header>
                <span>{description}</span>
                <h1>{Title}</h1>
            </header>
            <div className="feedbacks-container">
                {
                    feedbacks?.map(card => (
                        <article className="feedbacks-card" key={card.ID}>
                            <div className="feedback-image">
                                <Image src={'/quote.png'} alt='ciao' layout="fill" objectFit="scale-down"/>
                            </div>
                            <p>{card.description}</p>
                            <span className="feedback-owner">{card.Title}</span>
                            <span>{card.company}</span>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};