import { FormEventHandler, useCallback, useEffect, useState } from "react";
import { CardCoursesMasters, CardNewsLetter } from "../../molecule";
import { ILatestNews, ILatestNewsMainSettings, ILatestNewsNewsletter, ISharepointStyle } from "../../../models";

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

    const [news, setNews] = useState<ILatestNews[]>([]);

    const {
        Title,
        subtitle
    } = latestNewsMainSettings?.[0] || {};

    const retrieveNews = useCallback(() => {
        if ( !latestNews || news.length === latestNews.length ) return;

        const newsArray:ILatestNews[] = [];
        const indexToReach = news.length + 5;

        for (let i = news.length; i < latestNews.length; i++) {
            if (i > indexToReach) break;
            newsArray.push(latestNews[i]);
        }

        setNews(prevState => [...prevState, ...newsArray]);
    }, [latestNews, news]);

    const handleSubmit: FormEventHandler = useCallback((e) => {
        e.preventDefault()
    }, []);

    useEffect(() => {
        retrieveNews();

        return () => setNews([]);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="latest-news span-1-12">
            <header>
                <h1>{Title}</h1>
                <h2>{subtitle}</h2>
            </header>
            <div className="latest-news-content">

                <div className="news-first-container">
                    {
                        news?.map(card => {

                            const {
                                mainButtonBackgroundColor,
                                mainButtonColor,
                                outerButtonShadowColor,
                                innerButtonShadowrColor,
                                secondaryButtonBackgroundColor
                            }: ISharepointStyle = card?.style ? JSON.parse(card?.style) : {};

                            return(
                                <CardCoursesMasters
                                    key={card.ID}
                                    title={card.Title} 
                                    description={card.description}
                                    image={card.image}
                                    backgroundColor={card.backgroundColor}
                                    buttonLabel={card.buttonLabel}
                                    buttonHref={card.buttonHref}
                                    mainButtonBackgroundColor={mainButtonBackgroundColor}
                                    mainButtonColor={mainButtonColor}
                                    outerButtonShadowColor={outerButtonShadowColor}
                                    innerButtonShadowrColor={innerButtonShadowrColor}
                                    secondaryButtonBackgroundColor={secondaryButtonBackgroundColor}
                                />
                            )
                        })
                    }
                    <span className="show-more pointer" onClick={retrieveNews}>Mostra altro</span>
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
