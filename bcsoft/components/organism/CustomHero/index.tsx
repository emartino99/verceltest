import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ICustomHero, ISharepointStyle } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";
interface CustomHeroProps {
    customHero: ICustomHero[] | undefined;
}

export const CustomHero = ({customHero}: CustomHeroProps) => {

    const route = useRouter();
    const params = route?.query?.id ?? route?.pathname;

    const dataExtracted = customHero?.find((row) => row.field === params);

    const {
        Title,
        description,
        backgroundImage,
        buttonLabel,
        buttonHref,
        style
    } = dataExtracted || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        headerStyle,
        titleStyle,
        descriptionStyle,
        imageOpacity
    } = usableStyle || {};
        
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(descriptionRef.current && description) {
            descriptionRef.current.innerHTML = description;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <section 
        className={`custom-hero span-1-12 ${imageOpacity && 'opacity'}`} 
        style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})`}}
    >
        <header 
            className="custom-hero-header" 
            style={{...headerStyle}}
        >
            <h1 className="custom-hero-title" style={{...titleStyle}}>{Title}</h1>
            <div 
                className="custom-hero-description" 
                ref={descriptionRef} 
                style={{...descriptionStyle}}>
            </div>
        </header>
        {
            buttonLabel && buttonHref &&
                <>
                    <CustomButton title={buttonLabel} href={buttonHref} />
                    <p className="custom-hero-telephone-number">oppure chiamaci allo <span> 081-5536002 </span></p>
                </>
        }
    </section>
  );
};