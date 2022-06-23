import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { useBusinessHook } from "../../../services";
import { parseImgJson } from "../../../utils";
import { CardLine } from "../../atoms";
import { ImageResources } from "../../atoms/ImageResources";

export function Business() {

    const { coreBusinessCards, error } = useBusinessHook();

    const { 
        title, 
        subtitle, 
        cardTextSize
    } = {
        title: 'todo', 
        subtitle: 'todo',
        cardTextSize: 1,
    };

    // const resultWithUsableIMG = useMemo(() => coreBusinessCards ? parseImgJson(coreBusinessCards): undefined,[coreBusinessCards]) 
    // console.log("🚀 ~ file: index.tsx ~ line 22 ~ Business ~ resultWithUsableIMG", resultWithUsableIMG)
    const newsUrlHandler = (url: string) => window.open(url, '_self');
 
    return (
        <section className="business span-1-12">

            <header className='business-header'>
                <h2 className='title'>{title}</h2>
                <span className='subtitle ' dangerouslySetInnerHTML={{ __html: subtitle }}></span>
            </header>
            <div className='grid template-col-autofill'>
                {coreBusinessCards?.map((item, i) => (
                    <article key={item.GUID} className='business-card'>
                        <div id={`core${i}`} className='core'>
                            <CardLine id={`core${i}` }/>
                            <div className='business-card_content'>
                                <ImageResources item={item} />
                                <header>
                                    <h4 className='cardTitle business-card_title'>{item.Title}</h4>
                                    <div className='cardSubtitle '>
                                        <p
                                            className='sectionSubtitle business-card_subtitle'
                                            style={{ fontSize: cardTextSize?.toString() + "em" }}
                                            dangerouslySetInnerHTML={{ __html: item.CardDescription ?? "" }}>
                                        </p>
                                    </div>
                                </header>
                                <footer className='business-card_footer'>
                                    <button
                                        className='btn btnOutline z-1 bg-white main-button'
                                        onClick={() => newsUrlHandler(item.CardButtonRedirectURL)}>
                                        {item.CardButtonText}
                                    </button>
                                    <button className='btn position-absolute btnOutline inner-shadow-button'>{item.CardButtonText}</button>
                                    <button className='btn position-absolute btnOutline outer-shadow-button'>{item.CardButtonText}</button>
                                </footer>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    );
};