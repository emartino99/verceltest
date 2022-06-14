import * as React from 'react';
import { IAdsBannerProps } from './IAdsBannerProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/AdsBanner.css';

const AdsBanner: React.FC<IAdsBannerProps> = (props) => {

  const {
    backgroundColor,
    adsBannerText,
    adsBannerTextWeight,
    adsBannerTextColor,
    adsBannerLinkText,
    adsBannerLinkTextWeight,
    adsBannerLinkTextColor,
    adsBannerLinkUrl
  } = props;

  const urlHandler = (url:string) => window.open(url, '_blank');

  return(
    <div 
      className='d-flex justify-content-center align-items-center' 
      style={{ backgroundColor: backgroundColor, minHeight: 50, width: '98vw' }}
    >
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-wrap justify-content-center align-items-center'>
          <span className={`ads-banner-text ${adsBannerTextWeight}`} style={{color: adsBannerTextColor}}>{adsBannerText}</span>
          {
            adsBannerLinkUrl && adsBannerLinkText &&
            <span className={`ads-banner-link-text ${adsBannerLinkTextWeight}`} style={{color: adsBannerLinkTextColor, }} onClick={() => urlHandler(adsBannerLinkUrl)}>{`>> ${adsBannerLinkText} <<`}</span>
          }
        </div>
      </div>
    </div>
  );  
};

export default AdsBanner;