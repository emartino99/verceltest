import Head from "next/head";
import { FormEventHandler, useCallback } from "react";
import { FacebookLogo, FooterLogo, Linkedin, YouTube } from "../../../assets";
import { useFooterLinkHook } from "../../../services";

export const Footer = () => {

  const { footerLinks, error } = useFooterLinkHook();
  
  const redirectHandler = (urlToRedirectTo: string) => window.open(urlToRedirectTo, '_blank');
  
  const handleSubmit: FormEventHandler = useCallback((e) => {
    e.preventDefault()
  }, [])
  return (
    <footer className="footer span-auto-12 grid template-col-12" itemScope itemType="https://schema.org/Organization">
      <section className="contact span-3-3">
        <span className="logo pointer" itemProp="logo" data-src='../../../assets/img/footer_logo.svg' >
          <FooterLogo />
        </span>
        <div className="social">
          <YouTube className=" pointer" onClick={() => redirectHandler('https://www.youtube.com/channel/UCz3lusBHpaSfx32g0RqF1UQ')} />
          <Linkedin className=" pointer" onClick={() => redirectHandler('https://it.linkedin.com/company/bc-soft-srl')} />
          <FacebookLogo className=" pointer" onClick={() => redirectHandler('https://www.facebook.com/www.bcsoft.net/')} />
        </div>
      </section>
      <section className="menu span-7-5 grid ">
        <div className='privacy'>
          {
            footerLinks
              ?.filter(currentLink => currentLink.isMain === "NO")
              .map(item =>
                <span
                  className="site-info"
                  key={item.ID}
                  onClick={() => redirectHandler(item.FooterLinkUrl)}>
                  {item.Title}
                </span>
              )
          }
        </div>
        <form className='newsletter' onSubmit={handleSubmit}>
          <label htmlFor="Iscriviti alla news letter">Rimani sempre aggiornato con la newsletter</label>
          <div className='signin'>
            <input type="text" placeholder='Email' className='input' />
            <button type="submit" className='button'>Iscriviti</button>
          </div>
        </form>
      </section>
      <section className="separator span-2-10"></section>
      <section className="legal span-2-10">
        <div className='site'>
          {footerLinks?.filter(currentLink => currentLink.isMain === "NO").map(item => <span className="site-info" key={item.ID} onClick={() => redirectHandler(item.FooterLinkUrl)}>{item.Title}</span>)
          }
        </div>
        <div className='piva'>
          <span>© 2022 BC Soft - All rights reserved - P.IVA 06837180634</span>
        </div>
      </section>
    </footer>
  )
}
