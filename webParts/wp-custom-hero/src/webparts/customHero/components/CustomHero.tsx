import * as React from 'react';
import { ICustomHeroProps } from './ICustomHeroProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/CustomHero.css';
import { BcButton } from 'bc-button';

const CustomHero: React.FC<ICustomHeroProps> = (props) => {

  const {
    backgroundColor,
    urlMedia,
    title,
    titleWeight,
    titleSize,
    titleColor,
    description,
    descriptionWeight,
    descriptionColor,
    descriptionSize,
    textAlign,
    useImageAsBackground,
    useBcsoftLogo,
    useArrowButton,
    useBcButton,
    buttonAlign,
    buttonDescription,
    buttonDescriptionWeight,
    buttonDescriptionColor,
    buttonDescriptionSize,
    btnLabel,
    btnUrl,
    btnClass
  } = props;

  return(
    <div 
      className={`section ${ !useImageAsBackground && 'custom-hero-clip-path'}`} 
      style={{ backgroundColor: backgroundColor}}
    >
    {
      useImageAsBackground &&
        <img 
          className='position-absolute custom-hero-background-opacity' 
          src={urlMedia}
          alt='background img' 
        />
      
    }
      <div className='container p-4'>
        <div className='col-12 px-0 d-flex flex-column justify-content-start align-items-center'>
          <div className={`custom-hero-container d-flex flex-column flex-nowrap justify-content-around align-items-${textAlign}`} >
            <h2 
              className={`${titleWeight}`} 
              style={{ color: titleColor, fontSize: `${titleSize.toString()}em`}} 
              dangerouslySetInnerHTML={{  __html: title }}>
            </h2>
            <span 
              className={`${descriptionWeight} mb-5`} 
              style={{ color:descriptionColor, fontSize: `${descriptionSize.toString()}em`}} 
              dangerouslySetInnerHTML={{  __html: description }}>
            </span>
          </div>
            { useBcButton &&
              !useArrowButton &&
                <div className={`custom-hero-button-container mt-5 d-flex flex-column flex-wrap align-items-${buttonAlign} justify-content-center`} >
                  <BcButton 
                    label={btnLabel} 
                    enableLink={true} 
                    href={btnUrl} 
                    buttonClass={btnClass} 
                  />
                  <span 
                    className={`${buttonDescriptionWeight} mt-5`} 
                    style={{ color: buttonDescriptionColor, fontSize: `${buttonDescriptionSize.toString()}em`}} 
                    dangerouslySetInnerHTML={{  __html: buttonDescription }}>
                  </span>
                </div>
            }
            { useArrowButton &&
              !useBcButton &&
                <div className={`custom-hero-button-container mt-5 d-flex flex-row flex-wrap align-items-center justify-content-${buttonAlign}`} >
                  <div 
                    className="parallelogram d-flex align-items-center justify-content-center"
                    onClick={() => window.open(btnUrl, '_blank')}
                  >
                    <div>
                      <img src={require('../img/button-arrow.png')} alt="" />  
                    </div>
                  </div>
                  <div className="parallelogram-top-shadow"></div>
                  <div className="parallelogram-bottom-shadow"></div>
                  <span 
                    className={`${buttonDescriptionWeight} ml-5`} 
                    style={{ color: buttonDescriptionColor, fontSize: `${buttonDescriptionSize.toString()}em`}} 
                    dangerouslySetInnerHTML={{  __html: buttonDescription }}>
                  </span>
                </div>
            }
        </div>
      </div>
      {
        useBcsoftLogo && 
        <div className='custom-hero-bcsoft-logo'>
          <img 
            className='custom-hero-logo-opacity' 
            src={require('../img/bcsoft-logo.png')} 
            alt="bcsoft-logo" 
          />
        </div>
      }
    </div>
  );
};

export default CustomHero;
