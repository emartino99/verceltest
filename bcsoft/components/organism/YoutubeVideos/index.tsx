import { useRouter } from "next/router";
import { ISharepointStyle, IYoutube, IYoutubeMainSettings } from "../../../models";
import { extractData, extractMultipleData } from "../../../utils";

interface YoutubeVideosProps {
    youtube: IYoutube[] | undefined;
    youtubeMainSettings: IYoutubeMainSettings[] | undefined
}

export const YoutubeVideos = ({
    youtube,
    youtubeMainSettings
}: YoutubeVideosProps) => {

    const route = useRouter();
    const videoExtracted: IYoutube[] = extractMultipleData(route, youtube);
    const dataExtracted: IYoutubeMainSettings = extractData(route, youtubeMainSettings);

    const {
        Title,
        subtitle,
        style
    } = dataExtracted || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        titleStyle,
        descriptionStyle
    } = usableStyle || {};

    return (
        <section className="youtube-videos span-1-12">
            <header>
                <h1 style={{...titleStyle}}>{Title}</h1>
                <h2 style={{...descriptionStyle}}>{subtitle}</h2>
            </header>
            <div className="youtube-videos-content">
                {
                    videoExtracted?.map( card => {
                        const { cardStyle }: ISharepointStyle = card.style && JSON.parse(card.style);
                        return (
                            <article key={card.ID}>
                                <iframe
                                    className="youtube-card"
                                    style={{...cardStyle}}
                                    src={card.SRC} 
                                    title={card.Title} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen={true}
                                    loading='lazy'
                                >
                                </iframe>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};
