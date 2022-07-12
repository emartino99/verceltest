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
        layoutOrder
    } = infoBanner?.[0] || {};

    return (
        <section className="info-banner span-1-12">
            <div className={`info-banner-${layoutOrder}`}>
                <h1>{Title}</h1>
                <p>{description}</p>
                {
                    buttonLabel && buttonHref && <CustomButton title={buttonLabel} href={buttonHref} />
                }
            </div>
        </section>
    )
}
