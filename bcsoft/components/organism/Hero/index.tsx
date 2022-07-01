import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CurvedArrow } from "../../../assets";
import { IHeroMedia } from "../../../models";

import { useHeroHooks } from "../../../services";
import { getMediaPath } from "../../../utils";

export function Hero() {
    const router = useRouter();
    const { quickLinks, media, error } = useHeroHooks();

    const [showQuickLinksMenu, setShowQuickLinksMenu] = useState<boolean>(false);
    const quickLinksMenuHandler = () => setShowQuickLinksMenu(val => !val);

    const redirectToUrl = (url: string) => router.push(url);

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
                &&  <Image src={getMediaPath(ImgURL)} alt={Title} layout='fill' />
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
                                <div
                                    className="parallelogram"
                                    onClick={quickLinksMenuHandler}
                                >
                                    <CurvedArrow width={57} height={72} style={{ transform: `rotateY(${showQuickLinksMenu ? '0' : '180'}deg)` }} />
                                </div>
                                <div className="parallelogram-top-shadow"></div>
                                <div className="parallelogram-bottom-shadow"></div>
                                <menu className='quick-links'>
                                    {
                                        showQuickLinksMenu
                                            ? quickLinks?.map(currentQuickLink => (
                                                <p key={currentQuickLink.ID} className='links' onClick={() => redirectToUrl(currentQuickLink.QuickLinkUrl)}>{currentQuickLink.Title}</p>
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

