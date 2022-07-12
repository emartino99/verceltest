import { useEffect, useRef } from "react";
import { ICustomHero } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface CustomHeroProps {
    customHero: ICustomHero[] | undefined;
}

export const CustomHero = ({customHero}: CustomHeroProps) => {

    const {
        Title,
        description,
        backgroundImage,
        buttonLabel,
        buttonHref
    } = customHero?.[0] || {};
        
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(descriptionRef.current && description) {
            descriptionRef.current.innerHTML = description;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <section className="custom-hero span-1-12" style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})`}}>
        <header>
            <h1>{Title}</h1>
            <div ref={descriptionRef}></div>
        </header>
        {
            buttonLabel && buttonHref &&
                <>
                    <CustomButton title={buttonLabel} href={buttonHref} />
                    <p>oppure chiamaci allo <span className="custom-hero-telephone-number"> 081-5536002 </span></p>
                </>
        }
    </section>
  );
};
