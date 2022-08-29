import { FormEventHandler, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FacebookLogo,
  FooterLogo,
  Linkedin, YouTube
} from "../../../assets";
import { useFooterLinkHook } from "../../../services";
import { IFooterLinks } from "../../../models";

interface FooterProps{
  footerLinks?: IFooterLinks[] | undefined,
  skip?: boolean
}
export const Footer = (props: FooterProps) => {

  const router = useRouter();
  const { footerLinks: links, error } = useFooterLinkHook(props?.skip);
  const footerLinks = props?.footerLinks || links;

  const redirectHandler = (urlToRedirectTo: string) => router.push(urlToRedirectTo);

  const handleSubmit: FormEventHandler = useCallback((e) => {
    e.preventDefault()
  }, [])
  return (
    <>
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
                ?.filter(currentLink => currentLink.isMain === "SI")
                .map(item =>
                 <Link key={item.ID} href={item.FooterLinkUrl}>
                    <span className="site-info">{item.Title}</span>
                 </Link>
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
    </>
  )
}
