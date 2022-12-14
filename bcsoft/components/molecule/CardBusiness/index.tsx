import { useRouter } from "next/router";
import { iCoreBusinessCard } from "../../../models";
import { getRelativePath } from "../../../utils";
import { CardIcon } from "../../atoms";

interface CardBuisinessProps{
    item: iCoreBusinessCard,
    i: number
}
export function CardBuisiness({item, i}: CardBuisinessProps): JSX.Element {
    const router = useRouter();
    const { 
        cardTextSize
    } = { 
        cardTextSize: 1,
    };
    const newsUrlHandler = (url: string) => router.push(url);
    
    return(
        <article key={item.ID} className='business-card'>
            <CardIcon title={item.Title} relativePath={getRelativePath(item.CardImg)}  />
            <header className="business-card_header" style={{transform: 'skewY(-354deg)'}}>
                <h1 className='cardTitle business-card_title'>{item.Title}</h1>
                <div className='cardSubtitle '>
                    <p
                        className='sectionSubtitle business-card_subtitle'
                        style={{ fontSize: cardTextSize?.toString() + "em" }}
                        dangerouslySetInnerHTML={{ __html: item.CardDescription ?? "" }}>
                    </p>
                </div>
            </header>
            <footer className='business-card_footer'>
                <button
                    className='btn btnOutline z-1 bg-white main-button'
                    onClick={() => newsUrlHandler(item.CardButtonRedirectURL)}>
                    {item.CardButtonText}
                </button>
                <button className='btn position-absolute btnOutline inner-shadow-button'>{item.CardButtonText}</button>
                <button className='btn position-absolute btnOutline outer-shadow-button'>{item.CardButtonText}</button>
            </footer>
        </article>
    );
}