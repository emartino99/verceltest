import * as React from 'react';
import { ICertificationsProps } from './ICertificationsProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/Certifications.css';
import { BcButton } from 'bc-button';

const Certifications: React.FC<ICertificationsProps> = (props) => {

  const {
    backgroundColor,
    titleWeight,
    titleColor,
    titleSize,
    title,
    descriptionWeight,
    descriptionColor,
    descriptionSize,
    description,
    textAlign,
    useButton,
    btnLabel,
    btnUrl,
    btnClass,
    useCertificationsQuality,
    useCertificationsTechnical,
    useCertificationsSecurity,
    invertPosition
  } = props;

  const avaiableImages = [
    {
      title: 'certificazioni-qualita',
      value: useCertificationsQuality  
    },
    {
      title: 'certificazioni-tecniche',
      value: useCertificationsTechnical  
    },
    {
      title: 'certificazioni-sicurezza',
      value: useCertificationsSecurity  
    }
];

  const getTheChoosenImage = avaiableImages.filter((item => item.value === true));

  return(
    <div 
      className="section" 
      style={{ backgroundColor: backgroundColor, clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' }}
    >
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-row justify-content-center align-items-center '>
          <div 
            className='d-flex flex-wrap justify-content-center align-items-center certifications-container'
            style={{ flexDirection:  invertPosition ? 'row-reverse' : 'row'}}  
          >
            <div className={`text-${textAlign}`}>
              <h2 
                className={`${titleWeight}`} 
                style={{ color: titleColor, fontSize: titleSize.toString() + "em" }} 
                dangerouslySetInnerHTML={{  __html: title }}>
              </h2>
              <span 
                className={`${descriptionWeight} mb-5`} 
                style={{ color:descriptionColor, fontSize: descriptionSize.toString() + "em" }} 
                dangerouslySetInnerHTML={{  __html: description }}>
              </span>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
              {
                getTheChoosenImage.length ? 
                  <div>
                    <img src={require(`../img/${getTheChoosenImage[0].title}.png`)} alt="" />
                  </div>
                : <div></div>
              }
              {
                useButton && 
                  <div className='mt-5'>
                    <BcButton 
                      label={btnLabel} 
                      enableLink={true} 
                      href={btnUrl} 
                      buttonClass={btnClass} 
                    />
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;