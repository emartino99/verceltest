import { useState } from "react";
import Image from "next/image";
import { CurvedArrow } from "../../../assets";
import { IHeroMedia, IQuickLinks } from "../../../models";
import { getMediaPath } from "../../../utils";
import Link from "next/link";

interface HeroProps {
    quickLinks: IQuickLinks[] | undefined;
    media: IHeroMedia[] | undefined;
}

export function Hero({quickLinks, media}: HeroProps) {

    const [showQuickLinksMenu, setShowQuickLinksMenu] = useState<boolean>(false);
    const quickLinksMenuHandler = () => setShowQuickLinksMenu(val => !val);

    const {
        ImgURL,
        MediaURL,
        Title
    } = media?.[0] || {} as IHeroMedia;

    return (
        <section className="hero span-1-12" >
            {
                !!MediaURL  &&
                <div>
                    <video autoPlay controls>
                        <source src={MediaURL} type="video/mp4"></source>
                    </video>
                </div>
            }
            {
                !MediaURL 
                && ImgURL
                && <Image src={getMediaPath(ImgURL)} alt={Title} layout='fill' priority/>
            }

            {
                !MediaURL &&
                <div className='quick-links-menu-centered'>
                    <div className={`hero-elements`}>
                        <div className={`hero-content`}>
                            <span
                                className={`hero-content_title`}
                                dangerouslySetInnerHTML={{ __html: Title ?? "" }}>
                            </span>
                            <div className="check-more-container">

                                <div className="parallelogram pointer" onClick={quickLinksMenuHandler}>
                                    <div className="parallelogram-inner">
                                        <CurvedArrow width={50} height={67} />
                                    </div>
                                </div>
                                <div className="parallelogram-top-shadow">
                                    <div className="parallelogram-top-shadow-inner"></div>
                                </div>
                                <div className="parallelogram-bottom-shadow">
                                    <div className="parallelogram-bottom-shadow-inner"></div>
                                </div>

                                <menu className='quick-links'>
                                    {
                                        showQuickLinksMenu
                                            ? quickLinks?.map(currentQuickLink => (
                                               <Link key={currentQuickLink.ID} href={currentQuickLink.QuickLinkUrl} >
                                                    <p className='links' >{currentQuickLink.Title}</p>
                                               </Link>
                                            ))
                                            : <p className='links' onClick={quickLinksMenuHandler}>Guarda cosa possiamo fare per te</p>
                                    }
                                </menu>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

