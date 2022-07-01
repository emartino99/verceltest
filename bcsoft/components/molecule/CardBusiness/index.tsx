import { iCoreBusiness } from "../../../models";
import { getRelativePath } from "../../../utils";
import { CardLine, CardIcon } from "../../atoms";

interface CardBuisinessProps{
    item: iCoreBusiness,
    i: number
}
export function CardBuisiness({item, i}: CardBuisinessProps): JSX.Element {

    const { 
        cardTextSize
    } = { 
        cardTextSize: 1,
    };
    const newsUrlHandler = (url: string) => window.open(url, '_self');
    
    return <article key={item.GUID} className='business-card'>
        <div id={`core${i}`} className='core'>
            <CardLine id={`core${i}`} />
            <div className='business-card_content'>
                <CardIcon title={item.Title} relativePath={getRelativePath(item.CardImg)} width={64}/>
                <header className="business-card_header">
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
            </div>
        </div>
    </article>;
}