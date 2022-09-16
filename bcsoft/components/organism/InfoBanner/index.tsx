import { useEffect, useRef } from "react";
import { CustomButton } from "../../atoms/CustomButton"
import { IInfoBanner, ISharepointStyle } from "../../../models";

interface InfoBannerProps {
    infoBanner: IInfoBanner[] | undefined;
}

export const InfoBanner = ({infoBanner}: InfoBannerProps) => {

    const descriptionRef = useRef<HTMLDivElement>(null);

    const {
        Title,
        description,
        buttonLabel,
        buttonHref,
        layoutOrder,
        style
    } = infoBanner?.[0] || {};

    const usableStyle: ISharepointStyle = style && JSON.parse(style);

    const {
        titleStyle,
        descriptionStyle,
        backgroundColor,
        mainButtonBackgroundColor,
        mainButtonColor,
        outerButtonShadowColor,
        innerButtonShadowrColor,
        secondaryButtonBackgroundColor
    } = usableStyle || {};

    useEffect(() => {
        if(descriptionRef.current && description) {
            descriptionRef.current.innerHTML = description;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="info-banner span-1-12" style={{backgroundColor: backgroundColor}}>
            <div className={`info-banner-${layoutOrder}`} >
                <h1 style={{...titleStyle}}>{Title}</h1>
                <p style={{...descriptionStyle}} ref={descriptionRef} ></p>
                {
                    buttonLabel && 
                        <CustomButton 
                            title={buttonLabel} 
                            href={buttonHref} 
                            mainBackgroundColor={mainButtonBackgroundColor}
                            mainColor={mainButtonColor}
                            outerShadowColor={outerButtonShadowColor}
                            innerShadowrColor={innerButtonShadowrColor}
                            secondaryBackgroundColor={secondaryButtonBackgroundColor}
                        />
                }
            </div>
        </section>
    )
}
