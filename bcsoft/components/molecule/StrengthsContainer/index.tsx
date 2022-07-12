import { UseWindowSize } from "../../../hooks";
import { IStrengthsContainer } from "../../../models";
import Image from "next/image";

interface StrengthsContainerProps {
    arrayToMap: IStrengthsContainer[];
}

export const StrengthsContainer = ({arrayToMap}: StrengthsContainerProps) => {

    const [width] = UseWindowSize();

    const widthToRemove:number = width > 1000 ? .3 : .5;

    return(
        <div className="strengths-container">
            {
                arrayToMap.map((item,index) => (
                    <article key={index}>
                        <div className="perspective">
                            <div 
                                className="strengths-card fade-in-delay-2" 
                                style={{left: item.left, backgroundColor: item.backgroundColor}}
                            >
                            </div>
                        </div>
                        {
                            item.img &&
                            <>
                                <div 
                                    className="fade-in-delay-1" 
                                    style={{top: item.thinBorderTop, left: item.thinBorderLeft, width: 2, height: item.thinBorderHeight}}
                                >
                                    <Image alt='thinBorder'src={"/thinBorder.png"} layout="fill" />
                                </div>
                                <div 
                                    className="strengths-circle fade-in-delay-1"
                                    style={{top: item.thinBorderTop, left: item.thinBorderLeft && parseFloat(item.thinBorderLeft) - widthToRemove + '%'}}
                                >
                                </div>
                                <div 
                                    className="image-container fade-in" 
                                    style={{top: item.imgTop, left: item.imgLeft, flexDirection: item.flexDirection ? 'row-reverse' : 'row' }}
                                >
                                    <Image alt={item.img} src={`/${item.img}`} width={item.width} height={item.height} />
                                    <span>{item.imgText}</span>
                                    <div 
                                        className="text-container" 
                                        style={{left: item.hoverTextLeft, textAlign: item.flexDirection ? 'right' : 'left'}}
                                    >
                                        <p>
                                            Il nostro è un percorso condiviso verso il successo. I problemi non rappresentano ostacoli, ma stimoli che ci spingono a trovare sempre la migliore soluzione.
                                        </p>
                                    </div>
                                </div>
                                
                            </>
                        }
                    </article>
                  )
                )
            }
        </div>
    );
};


