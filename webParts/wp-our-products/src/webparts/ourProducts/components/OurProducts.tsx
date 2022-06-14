import * as React from 'react';
import { useEffect, useState } from 'react';
import { IOurProductsProps } from './IOurProductsProps';
import { getOurProductsCards } from '../service';
import { IOurProductsCardsModel } from '../service/getOurProductsCards';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/OurProducts.css';
import { parseImgJson } from '../utilis';

const OurProducts:React.FC<IOurProductsProps> = (props) => {

  const [productsCards, setProductsCards] = useState<IOurProductsCardsModel[]>([]);

  const {
    title,
    titleColor,
    titleSize,
    titleWeight,
    description,
    descriptionColor,
    descriptionSize,
    descriptionWeight,
    sp
  } = props;

  const getOurProductsCardsHandler = async () => {
    const result: IOurProductsCardsModel[] = await getOurProductsCards(sp);
    const resultWithUsableIMG = parseImgJson(result);
    setProductsCards(resultWithUsableIMG);
  };

  useEffect(() => {
    getOurProductsCardsHandler();
  }, []);

  return(
    <div className='d-flex justify-content-center align-items-center flex-column'>

      <div className='p-5 text-center'>
        <h3 
          className={`px-3 ${titleWeight}`} 
          style={{ fontSize: titleSize.toString() + "em", color: titleColor }} 
          dangerouslySetInnerHTML={{ __html: title ?? "" }}>
        </h3>
        <span 
          className={`px-3 ${descriptionWeight}`} 
          style={{ fontSize: descriptionSize.toString() + "em", color: descriptionColor }} 
          dangerouslySetInnerHTML={{ __html: description ?? "" }}>
        </span>
      </div>

      <div className='d-flex justify-content-center align-items-center flex-wrap' style={{gap: '1.5rem'}}>

        {
          productsCards.length && productsCards.map( (card, index) => {

            const isOdd = index % 2 === 0;
            const textColor = isOdd ? '#FFF' : '#002950';
            const backgroundColor = isOdd ? '#001F3C' : '#F0C70C';
            const dotCOlor = isOdd ? '#ACD0FB' : '#001F3C';

            return(
              <div 
                className='d-flex justify-content-center align-items-center our-products-card flex-column' 
                style={{gap: '1rem', backgroundColor: backgroundColor }}
              >
                <div className='d-flex justify-content-center align-items-center' style={{ gap: '2rem' }}>
                  <div>
                    <img src={card.ProdottiImg}  alt="" />
                  </div>
                  <div>
                    <h3 
                      className='m-0'
                      style={{color: textColor}}
                    >
                      {card.Title}
                    </h3>
                  </div>
                </div>

                <div className='d-flex justify-content-around align-items-center w-100'>
                  <span className="dot" style={{color: dotCOlor}}></span>
                </div>

                <div className='text-center' style={{width: '50%'}}>
                  <span style={{color: textColor}}>
                    {card.ProdottiDescription}
                  </span>
                </div>

              </div>
            );
          })
        }
      
      </div>
    </div>
  );
};

export default OurProducts;