import { INumbers, INumbersMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";

interface NumbersProps {
    numbers: INumbers[] | undefined;
    numbersMainSettings: INumbersMainSettings[] | undefined;
}

export const Numbers = ({numbers, numbersMainSettings}: NumbersProps) => {

    const {
        Title,
        description,
        backgroundImage
    } = numbersMainSettings?.[0] || {};

    return(
        <section className="numbers span-1-12" style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})`}} >
            <header className='numbers-header numbers-wrapper' >
                <div>
                    <h1 dangerouslySetInnerHTML={{  __html: Title ?? '' }}></h1>
                    <span dangerouslySetInnerHTML={{  __html: description ?? '' }}></span>
                </div>  
            </header>
            <aside className='numbers-wrapper'>
            {
                numbers?.length && (numbers.map(((card, index) => {
                return(
                    <article key={card.ID}>
                        <div className={`numbers-card inner-card-${index}`} >
                            <span>{card.Title}</span>
                            <p>{card.CardDescription}</p>
                        </div>
                        <div className={`numbers-card outer-card-${index}`}></div>
                    </article>
                ); 
                }))) 
            }
            </aside>
        </section>
    );
};