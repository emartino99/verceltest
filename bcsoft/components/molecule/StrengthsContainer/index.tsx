import { IStrengthsContainer, IStrengths } from "../../../models";
import Image from "next/image";
import { CustomImage } from "../../atoms/CustomImage";

interface StrengthsContainerProps {
    arrayToMap: IStrengths[] | undefined;
    objectCss: IStrengthsContainer[];
}

export const StrengthsContainer = ({arrayToMap, objectCss}: StrengthsContainerProps) => {

    return(
        <div className="strengths-container">
            {
                arrayToMap?.map((item,index) => (
                    <article key={item.ID}>
                        <div className="perspective">
                            <div 
                                className="strengths-card fade-in-delay-2" 
                                style={{left: objectCss[index].left, backgroundColor: objectCss[index].backgroundColor}}
                            >
                            </div>
                        </div>
                        {
                            item.image &&
                            <>
                                <div 
                                    className="fade-in-delay-1" 
                                    style={{top: objectCss[index].thinBorderTop, left: objectCss[index].thinBorderLeft, width: 2, height: objectCss[index].thinBorderHeight}}
                                >
                                    <Image alt='thinBorder'src={"/thinBorder.png"} layout="fill" />
                                </div>
                                <div 
                                    className="strengths-circle fade-in-delay-1"
                                    style={{top: objectCss[index].thinBorderTop, left: `${parseFloat(objectCss[index].thinBorderLeft || '0') - .25}%` }}
                                >
                                </div>
                                <div 
                                    className="image-container fade-in" 
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
                    </article>
                  )
                )
            }
        </div>
    );
};


