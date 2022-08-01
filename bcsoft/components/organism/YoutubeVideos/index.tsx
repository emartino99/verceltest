import { IYoutube, IYoutubeMainSettings } from "../../../models";

interface YoutubeVideosProps {
    youtube: IYoutube[] | undefined;
    youtubeMainSettings: IYoutubeMainSettings[] | undefined
}

export const YoutubeVideos = ({
    youtube,
    youtubeMainSettings
}: YoutubeVideosProps) => {

    const {
        Title,
        subtitle
    } = youtubeMainSettings?.[0] || {};

    return (
        <section className="youtube-videos span-1-12">
            <header>
                <h1>{Title}</h1>
                <h2>{subtitle}</h2>
            </header>
            <div className="youtube-videos-content">
                {
                    youtube?.map(card => (
                        <article key={card.ID}>
                            <iframe
                                className="youtube-card"
                                src={card.SRC} 
                                title={card.Title} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen={true}
                                loading='lazy'
                            >
                            </iframe>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};
