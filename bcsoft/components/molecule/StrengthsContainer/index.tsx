import { useRef, useEffect } from "react";
import { IStrengthsContainer, IStrengths } from "../../../models";
import Image from "next/image";
import { CustomImage } from "../../atoms/CustomImage";

interface StrengthsContainerProps {
    arrayToMap: IStrengths[] | undefined;
    objectCss: IStrengthsContainer[];
    cssClass: string;
}

export const StrengthsContainer = ({arrayToMap, objectCss, cssClass}: StrengthsContainerProps) => {

    const divRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    arrayToMap?.forEach((item, index) => {
                        entry.target.children[index].children[0].children[0].classList.add('fade-in-delay-2');

                        if (item.image) {
                            entry.target.children[index].children[1]?.classList.add('fade-in-delay-1');
                            entry.target.children[index].children[2]?.classList.add('fade-in-delay-1');
                            entry.target.children[index].children[3]?.classList.add('fade-in');
                        }
                    })
                }
            });
        });
          
        observer.observe(divRef.current);
    }, [arrayToMap]);

    return(
        <div ref={divRef} className={`strengths-container ${cssClass}`}>
            {
                arrayToMap?.map((item,index) => (
                    <div key={item.ID}>
                        <div className="perspective">
                            <div 
                                className="strengths-card" 
                                style={{left: objectCss[index].left, backgroundColor: objectCss[index].backgroundColor, transform: objectCss[index].transform }}
                            >
                            </div>
                        </div>
                        {
                            item.image &&
                            <>
                                <div style={{top: objectCss[index].thinBorderTop, left: objectCss[index].thinBorderLeft, width: 2, height: objectCss[index].thinBorderHeight}}>
                                    <Image alt='thinBorder'src={"/thinBorder.png"} layout="fill" />
                                </div>
                                <div 
                                    className="strengths-circle"
                                    style={{top: objectCss[index].thinBorderTop, left: `${parseFloat(objectCss[index].thinBorderLeft || '0') - .25}%` }}
                                >
                                </div>
                                <div 
                                    className="image-container" 
                                    style={{top: objectCss[index].imgTop, left: objectCss[index].imgLeft, flexDirection: objectCss[index].flexDirection ? 'row-reverse' : 'row' }}
                                >
                                    <CustomImage title={item.Title} relativePath={item.image} width={item.imageWidth} height={item.imageheight} />
                                    <span>{item.Title}</span>
                                    <div 
                                        className="text-container" 
                                        style={{left: objectCss[index].hoverTextLeft, textAlign: objectCss[index].flexDirection ? 'right' : 'left'}}
                                    >
                                        <p>{item.hoverText}</p>
                                    </div>
                                </div>
                                
                            </>
                        }
                    </div>
                  )
                )
            }
        </div>
    );
};


