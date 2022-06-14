import * as React from 'react';
import { useEffect, useState } from 'react';
import { getQuickLinks } from '../service';
import { IQuickLinks } from '../models';
import { IHeroHomePageProps } from './IHeroHomePageProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/HeroHomePage.css';

const HeroHomePage: React.FC<IHeroHomePageProps> = (props) => {

  const [ quickLinks, setQuickLinks ] = useState<IQuickLinks[]>([]);
  const [ showQuickLinksMenu, setShowQuickLinksMenu ] = useState<boolean>(false);

  const {
    videoPlayer,
    urlMedia,
    alignElements,
    titleWeight,
    titleAlign,
    titleSize,
    textColor,
    title,
    sp
  } = props;

  const redirectToUrl = (url:string) => window.open(url, '_blank');

  const quickLinksMenuHandler = () => setShowQuickLinksMenu(!showQuickLinksMenu);

  const retrieveQuickLinks = async () => {
    const result = await getQuickLinks(sp);
    setQuickLinks(result);
  };

  useEffect(() => {
    retrieveQuickLinks();
  }, []);

  return(

    <div style={{minHeight: 400}}>

      {
        videoPlayer === true && urlMedia &&
          <div>
            <video autoPlay controls>
              <source src={urlMedia} type="video/mp4"></source>
            </video>
          </div>
      }
      {
        videoPlayer === false && urlMedia &&
          <div>
            <img src={urlMedia}></img>
          </div>
      }

      {
        videoPlayer === false &&
          <div className='quick-links-menu-centered'>
            <div className={`d-flex align-items-center hero-elements`}>
              <div className={`container d-flex flex-column align-items-center justify-content-${alignElements}`}>
                <span 
                  className={`w-100 px-3 ${titleWeight} text-${titleAlign}`} 
                  style={{ fontSize: titleSize.toString() + "em", color: textColor }} 
                  dangerouslySetInnerHTML={{ __html: title ?? "" }}>
                </span>
                <div className="check-more-container d-flex align-items-center">
                  <div 
                    className="parallelogram d-flex align-items-center justify-content-center"
                    onClick={quickLinksMenuHandler}
                  >
                    <div>
                      <img src={require('../img/curved-arrow.png')} alt="" />  
                    </div>
                  </div>
                  <div className="parallelogram-top-shadow"></div>
                  <div className="parallelogram-bottom-shadow"></div>
                  <div className='d-flex flex-wrap align-items-center quick-links'>
                    {
                      showQuickLinksMenu ? quickLinks.map(currentQuickLink => (
                        <p className='semibold'onClick={() => redirectToUrl(currentQuickLink.QuickLinkUrl)}>{currentQuickLink.Title}</p>
                      )) :
                      <p className='semibold'onClick={quickLinksMenuHandler}>Guarda cosa possiamo fare per te</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default HeroHomePage;