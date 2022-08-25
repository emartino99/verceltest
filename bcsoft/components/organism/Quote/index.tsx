import Image from "next/image";
import { useRouter } from "next/router";
import { IQuote, ISharepointStyle } from "../../../models";
import { getMediaPath } from "../../../utils";
import { extractData } from '../../../utils/extractData';

interface QuoteProps {
    quote: IQuote[] | undefined;
}

export const Quote = ({quote}: QuoteProps) => {
    
    const route = useRouter();
    const quoteExtracted:IQuote = extractData(route, quote);

    const redirectHandler = (urlToRedirectTo: string) => window.open(urlToRedirectTo);

    const {
        Title,
        style,
        image,
        imageALT,
        imageRedirect
    } = quoteExtracted || {};

    const { 
        titleStyle,
        imageStyle,
        sectionStyle
    }: ISharepointStyle = style && JSON.parse(style);

    return (
        <section className="quote span-1-12" style={{...sectionStyle}}>
            <div className="quote-image" style={{...imageStyle}}>
                <Image
                    className="pointer"
                    src={getMediaPath(image)} 
                    alt={imageALT} 
                    onClick={() => redirectHandler(imageRedirect)}
                    layout='fill'
                    objectFit="scale-down"
                />
            </div>
            <h1 style={{...titleStyle}}>{Title}</h1>
        </section>
    );
};