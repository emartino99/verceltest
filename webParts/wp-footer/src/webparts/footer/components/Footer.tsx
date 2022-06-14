import * as React from 'react';
import { useState, useEffect } from 'react';
import { getFooterLinks } from '../service';
import { IFooterLinks } from '../models';
import { IFooterProps } from './IFooterProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/Footer.css';

const Footer: React.FC<IFooterProps> = (props) => {

  const [footerLinks, setFooterLinks] = useState<IFooterLinks[]>([]);

  const { 
    backgroundColor,
    textColor,
    sp
  } = props;

  const getFooterLinksList = async () => {
    const result: IFooterLinks[] = await getFooterLinks(sp);
    setFooterLinks(result);
  };

  useEffect(() => {
    getFooterLinksList();
  }, []);

  const redirectHandler = (urlToRedirectTo:string) => window.open(urlToRedirectTo, '_blank');

  return(
    <div className="footer-container">
      <div className='footer-container-absolute-content' style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div className='container px-0'>
          <div className='col-12 px-0 d-flex flex-column'>
            <div className='d-flex flex-row'>
              <div className='d-flex flex-column flex-nowrap justify-content-center align-items-center footer-socials-and-logo'>
                <div>
                  <img src={require('../img/bcsoft-logo.png')} ></img>
                </div>
                <div className='d-flex flex-row flex-wrap justify-content-center align-content-center' style={{marginLeft: 50}}>
                  <div className='d-flex flex-wrap'>
                    <div className='footer-socials-and-logo-img-container'>
                      <img src={require('../img/youtube.png')} onClick={() => redirectHandler('https://www.youtube.com/channel/UCz3lusBHpaSfx32g0RqF1UQ')}></img>
                    </div>
                    <div className='footer-socials-and-logo-img-container'>
                      <img src={require('../img/linkedin.png')} onClick={() => redirectHandler('https://it.linkedin.com/company/bc-soft-srl')}></img>
                    </div>
                    <div className='footer-socials-and-logo-img-container'>
                      <img src={require('../img/facebook.png')} onClick={() => redirectHandler('https://www.facebook.com/www.bcsoft.net/')}></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer-links-newsletter-container d-flex flex-column flex-nowrap justify-content-center'>
                <div className='footer-links d-flex flex-row flex-wrap align-items-center'>
                  {
                    footerLinks.length && footerLinks.filter(currentLink => currentLink.isMain === "SI").map(item => <span onClick={() => redirectHandler(item.FooterLinkUrl)}>{item.Title}</span>)
                  }
                </div>
                <div className='footer-newsletter d-flex flex-column flex-nowrap'>
                  <label htmlFor="Iscriviti alla news letter">Rimani sempre aggiornato con la newsletter</label>
                  <div className='d-flex align-items-center '>
                    <input type="text" placeholder='Email' className='footer-input-text'/>
                    <button className='footer-button'>Iscriviti</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-separator'></div>
            <div className='d-flex flex-row'>
              <div className='footer-privacy d-flex flex-row flex-wrap align-items-center'>
                {
                  footerLinks.length && footerLinks.filter(currentLink => currentLink.isMain === "NO").map(item => <span onClick={() => redirectHandler(item.FooterLinkUrl)}>{item.Title}</span>)
                }
              </div>
              <div className='footer-copyright d-flex flex-row flex-wrap align-items-start justify-content-end'>
                <span>© 2022 BC Soft - All rights reserved - P.IVA 06837180634</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
