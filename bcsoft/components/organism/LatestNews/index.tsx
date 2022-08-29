import { FormEventHandler, useCallback } from "react";
import { CardCoursesMasters, CardNewsLetter } from "../../molecule";
import { ILatestNews, ILatestNewsMainSettings, ILatestNewsNewsletter } from "../../../models";

interface LatestNewsProps {
    latestNewsMainSettings: ILatestNewsMainSettings[] | undefined;
    latestNews: ILatestNews[] | undefined;
    latestNewsNewsletter: ILatestNewsNewsletter[] | undefined;
}

export const LatestNews = ({
    latestNewsMainSettings,
    latestNews,
    latestNewsNewsletter
}: LatestNewsProps) => {

    const {
        Title,
        subtitle
    } = latestNewsMainSettings?.[0] || {};

    const handleSubmit: FormEventHandler = useCallback((e) => {
        e.preventDefault()
      }, [])

    return (
        <section className="latest-news span-1-12">
            <header>
                <h1>{Title}</h1>
                <h2>{subtitle}</h2>
            </header>
            <div className="latest-news-content">

                <div className="news-first-container">
                    {
                        latestNews?.map(card => (
                            <CardCoursesMasters
                                key={card.ID}
                                title={card.Title} 
                                description={card.description}
                                image={card.image}
                                backgroundColor={card.backgroundColor}
                                buttonLabel={card.buttonLabel}
                                buttonHref={card.buttonHref}
                            />
                        ))
                    }
                    <span className="show-more pointer">Mostra altro</span>
                </div>

                <div className="news-second-container">
                    {
                        latestNewsNewsletter?.map(card => (
                            <CardNewsLetter
                                key={card.ID}
                                title={card.Title} 
                                description={card.description} 
                                image={card.image} 
                            />
                        ))
                    }
                    <form className='sign-in-newsletter' onSubmit={handleSubmit}>
                        <label htmlFor="Iscriviti alla news letter">Rimani sempre aggiornato con la newsletter</label>
                        <div className='signin'>
                            <input type="text" placeholder='Email' className='input' />
                            <button type="submit" className='button'>Iscriviti</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
