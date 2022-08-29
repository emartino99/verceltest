import { IInfoBanner } from "../../../models";
import { CustomButton } from "../../atoms/CustomButton"

interface InfoBannerProps {
    infoBanner: IInfoBanner[] | undefined;
}

export const InfoBanner = ({infoBanner}: InfoBannerProps) => {

    const {
        Title,
        description,
        buttonLabel,
        buttonHref,
        layoutOrder,
        backgroundColor,
        whiteColorTextAndButton
    } = infoBanner?.[0] || {};

    const color = whiteColorTextAndButton === 'SI' ? '#FFFFFF' : '#001F3C';
    const buttonTextColor = whiteColorTextAndButton === 'SI' ? '#001F3C' : '#FFFFFF';

    return (
        <section className="info-banner span-1-12" style={{backgroundColor: backgroundColor ?? '#C9E2FF'}}>
            <div className={`info-banner-${layoutOrder}`} style={{color: color}} >
                <h1>{Title}</h1>
                <p>{description}</p>
                {
                    buttonLabel && 
                        <CustomButton 
                            title={buttonLabel} 
                            href={buttonHref} 
                            mainBackgroundColor={color} 
                            mainColor={buttonTextColor} 
                        />
                }
            </div>
        </section>
    )
}
