import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ICustomHero, ISharepointStyle } from "../../../models";
import { extractData, getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";
import Image from "next/image";
interface CustomHeroProps {
    customHero: ICustomHero[] | undefined;
}

export const CustomHero = ({customHero}: CustomHeroProps) => {

    const route = useRouter();
    const dataExtracted: ICustomHero = extractData(route, customHero);

    const {
        Title,
        subtitle,
        description,
        backgroundImage,
        buttonLabel,
        buttonHref,
        style,
        image
    } = dataExtracted || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        containerStyle,
        headerStyle,
        titleStyle,
        subtitleStyle,
        descriptionStyle,
        backgroundImageOpacity,
        backgroundColor,
        background,
        flexFlow
    } = usableStyle || {};
        
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(descriptionRef.current) {
            description ? descriptionRef.current.innerHTML = description : descriptionRef.current.innerHTML = '';
        } 
    }, [description]);

  return (
    <section 
        className={`custom-hero span-1-12 ${backgroundImageOpacity && 'opacity'}`} 
        style={
            background ? {background: background} :
            backgroundColor ? {backgroundColor: backgroundColor} :
            backgroundImage ? {backgroundImage: `url(${getMediaPath(backgroundImage)})`, clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'} : {}
        }
    >
       <div className="custom-hero-content" style={{flexFlow: flexFlow, ...containerStyle }} >
            <header 
                className="custom-hero-header" 
                style={{...headerStyle}}
            >
                <h1 className="custom-hero-title" style={{...titleStyle}}>{Title}</h1>
                <h2 className="custom-hero-subtitle" style={{...subtitleStyle}}>{subtitle}</h2>
                <div 
                    className="custom-hero-description" 
                    ref={descriptionRef} 
                    style={{...descriptionStyle}}>
                </div>
            </header>
            {
                image && 
                    <div className="custom-hero-image">
                        <Image src={getMediaPath(image)} alt={Title} layout='fill' objectFit="scale-down" priority ></Image>
                    </div>
            }
       </div>
        {
            buttonLabel &&
                <>
                    <CustomButton title={buttonLabel} href={buttonHref} />
                    <p className="custom-hero-telephone-number">oppure chiamaci allo <span> 081-5536002 </span></p>
                </>
        }
    </section>
  );
};