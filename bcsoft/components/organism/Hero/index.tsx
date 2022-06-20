import Image from "next/image";
import { useState } from "react";
import { CurvedArrow } from "../../../assets";

import { useHeroHooks } from "../../../services/hero";

export function Hero() {

    const { quickLinks, error } = useHeroHooks();
    const [showQuickLinksMenu, setShowQuickLinksMenu] = useState<boolean>(false);
    // TODO: info from list!
    const {
        videoPlayer,
        urlMedia,
        alignElements,
        titleWeight,
        titleAlign,
        titleSize,
        textColor,
        title,
    } = {
        videoPlayer: false,
        urlMedia: '',
        alignElements: 'center',
        titleWeight: 'bold',
        titleAlign: 'center',
        titleSize: 1,
        textColor: 'black',
        title: 'Soluzioni digitali Al servizio delle idee',
    };

    const redirectToUrl = (url: string) => window.open(url, '_blank');

    const quickLinksMenuHandler = () => setShowQuickLinksMenu(val => !val);

    return (

        <div className="span-1-12" style={{ minHeight: 400 }}>

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
                        <div className={`hero-content justify-content-${alignElements}`}>
                            <span
                                className={`hero-content_title w-100 px-3 text-${titleAlign}`}
                                dangerouslySetInnerHTML={{ __html: title ?? "" }}>
                            </span>
                            <div className="check-more-container d-flex align-items-center">
                                <div
                                    className="parallelogram d-flex align-items-center justify-content-center"
                                    onClick={quickLinksMenuHandler}
                                >
                                   
                                        <CurvedArrow height={78}/>
                                   
                                </div>
                                <div className="parallelogram-top-shadow"></div>
                                <div className="parallelogram-bottom-shadow"></div>
                                <div className='quick-links'>
                                    {
                                        showQuickLinksMenu 
                                        ? quickLinks?.map(currentQuickLink => (
                                            <p key={currentQuickLink.ID} className='semibold' onClick={() => redirectToUrl(currentQuickLink.QuickLinkUrl)}>{currentQuickLink.Title}</p>
                                        ))
                                        :   <p className='semibold' onClick={quickLinksMenuHandler}>Guarda cosa possiamo fare per te</p>
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

