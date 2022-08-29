import { INumbers, INumbersMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from '../../atoms/CustomButton';
import Image from "next/image";

interface NumbersProps {
    numbers: INumbers[] | undefined;
    numbersMainSettings: INumbersMainSettings[] | undefined;
}

export const Numbers = ({numbers, numbersMainSettings}: NumbersProps) => {

    const {
        Title,
        description,
        backgroundImage,
        image,
        buttonLabel,
        buttonHref,
        rotate
    } = numbersMainSettings?.[0] || {};

    const mainTextColor = backgroundImage ? '#FFFFFF' : '#002950';
    const secondaryTextColor = backgroundImage ? '#FFFFFFF' : '#185FA2';
    const direction = rotate === 'SI' ? 'row-reverse' : 'row';

    return(
        <section 
            className="numbers span-1-12" 
            style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})`, flexDirection: direction}}
        >
            <header className='numbers-header numbers-wrapper' >
                <div>
                    <h1 dangerouslySetInnerHTML={{  __html: Title ?? '' }} style={{color: mainTextColor}} ></h1>
                    <span dangerouslySetInnerHTML={{  __html: description ?? '' }} style={{color: secondaryTextColor}} ></span>
                </div>
                {
                    image && 
                    <div className="numbers-image">
                        <Image src={getMediaPath(image)} alt={Title} layout='fill' objectFit="scale-down" />
                    </div>
                }
                { buttonLabel && <CustomButton title={buttonLabel} href={buttonHref} /> }
            </header>
            <aside className='numbers-wrapper'>
            {
                numbers?.length && (numbers.map(((card, index) => {
                return(
                    <div key={card.ID}>
                        <div className={`pointer numbers-card inner-card-${index}`} >
                            <span>{card.Title}</span>
                            <p>{card.CardDescription}</p>
                        </div>
                        <div className={`numbers-card outer-card-${index}`}></div>
                    </div>
                ); 
                }))) 
            }
            </aside>
        </section>
    );
};