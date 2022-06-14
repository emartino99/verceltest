import * as React from 'react';
import { useState, useEffect } from 'react';
import { BcButton } from 'bc-button';
import { ICard } from '../models';
import { getCardsInfo } from '../service/getCardsInfo';
import { IBcsoftNumbersProps } from './IBcsoftNumbersProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/BcsoftNumbers.css';

const BcsoftNumbers:React.FC<IBcsoftNumbersProps> = (props) => {

  const [cards, setCards] = useState<ICard[]>([]);

  const {
    bcSoftNumersListId,
    backgroundColor,
    mainTitle,
    mainTitleColor,
    mainTitleSize,
    mainTitleWeight,
    mainDescription,
    mainDescriptionColor,
    mainDescriptionSize,
    mainDescriptionWeight,
    useImageBackground,
    useButton,
    btnLabel,
    btnClass,
    btnUrl,
    enableHrefButton,
    useBcSoftFactoryLogo,
    invertPosition,
    urlMedia,
    sp
  } = props;

  const getCardsFromACertainList = async () => {
    const result: ICard[] = await getCardsInfo(sp, bcSoftNumersListId);
    setCards(result);
  };


  useEffect(() => {
    getCardsFromACertainList();
  }, [bcSoftNumersListId]);

  //todo responsive delle card
  //todo rendo giò da ora queste webparte usabile anche negli altri casi? inserisco bottone, immagine ecc

    let cardsTitleFontSize;
    if(bcSoftNumersListId != "476f1ae5-e811-4708-933b-e08453c08ec6"){
      cardsTitleFontSize ={
        fontSize: "0.9vw"
      };
    }
 
  return(
    <div className="section" style={{ backgroundColor: backgroundColor, clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)'}} >
      {
        useImageBackground && <img className='position-absolute' src={urlMedia} ></img>
      }
      <div className='container px-0'>
        <div 
          className='col-12 px-0 d-flex flex-wrap justify-content-center align-items-center bcsoft-numbers-container' 
          style={{ flexDirection: invertPosition ? "row-reverse" : "row" }} 
        >
          <div className='d-flex flex-column justify-content-center align-items-start bcsoft-numbers-wrapper' >
            <h2 
              className={`${mainTitleWeight}`} 
              style={{ color: mainTitleColor, fontSize: mainTitleSize.toString() + "em" }} 
              dangerouslySetInnerHTML={{  __html: mainTitle }}>
            </h2>
            <span 
              className={`${mainDescriptionWeight} mb-5`} 
              style={{ color: mainDescriptionColor, fontSize: mainDescriptionSize.toString() + "em" }} 
              dangerouslySetInnerHTML={{  __html: mainDescription }}>
            </span>
            {
              useBcSoftFactoryLogo && 
                <div className='mb-5'>
                  <img src={require('../img/logo-factory.png')} alt="bc-soft-factory" />
                </div>
            }
            {
              useButton &&
                <BcButton 
                  label={btnLabel} 
                  enableLink={true} 
                  href={btnUrl} 
                  buttonClass={btnClass} 
                />
            }
          </div>

          <div className='bcsoft-numbers-wrapper'>
            {

              cards.length && (cards.map(((card, index) => {
                return(
                  <>
                    <div className={`d-flex flex-column justify-content-center align-items-center bcsoft-stats-inner-card-${index}`} >
                     <p style={cardsTitleFontSize}>{card.Title}</p>
                      <p>{card.CardDescription}</p>
                    </div>
                    <div className={`d-flex flex-column justify-content-center align-items-center bcsoft-stats-outer-card-${index}`}></div>
                  </>
                ); 
              }))) 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BcsoftNumbers;