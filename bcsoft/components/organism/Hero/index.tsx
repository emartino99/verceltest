import Image from "next/image";
import { useState } from "react";
import { CurvedArrow } from "../../../assets";

import { useHeroHooks } from "../../../services";

export function Hero() {

    const { quickLinks, error } = useHeroHooks();
    const [showQuickLinksMenu, setShowQuickLinksMenu] = useState<boolean>(false);
    // TODO: info from list!
    const {
        videoPlayer,
        urlMedia, 
        titleAlign, 
        title,
    } = {
        videoPlayer: false,
        urlMedia: '', 
        titleAlign: 'center', 
        title: 'Soluzioni digitali Al servizio delle idee',
    };

    const redirectToUrl = (url: string) => window.open(url, '_blank');

    const quickLinksMenuHandler = () => setShowQuickLinksMenu(val => !val);

    return (

        <section className="hero span-1-12" >

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
                    <Image src={urlMedia} alt=''/>
                </div>
            }

            {
                !videoPlayer  &&
                <div className='quick-links-menu-centered'>
                    <div className={`hero-elements`}>
                        <div className={`hero-content`}>
                            <span
                                className={`hero-content_title w-100text-${titleAlign}`}
                                dangerouslySetInnerHTML={{ __html: title ?? "" }}>
                            </span>
                            <div className="check-more-container">
                                <div
                                    className="parallelogram"
                                    onClick={quickLinksMenuHandler}
                                    >
                                        <CurvedArrow width={57} height={72} style={{ transform: `rotateY(${showQuickLinksMenu ? '0': '180'}deg)`}} />
                                </div>
                                <div className="parallelogram-top-shadow"></div>
                                <div className="parallelogram-bottom-shadow"></div>
                                <menu className='quick-links'>
                                    {
                                        showQuickLinksMenu 
                                        ? quickLinks?.map(currentQuickLink => (
                                            <p key={currentQuickLink.ID} className='links' onClick={() => redirectToUrl(currentQuickLink.QuickLinkUrl)}>{currentQuickLink.Title}</p>
                                        ))
                                        :   <p className='links' onClick={quickLinksMenuHandler}>Guarda cosa possiamo fare per te</p>
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

