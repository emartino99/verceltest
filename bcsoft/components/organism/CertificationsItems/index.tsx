import Image from "next/image";
import { ICertifications, ISharepointStyle } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface CertificationsProps {
  certifications: ICertifications[] | undefined;
}

export const CertificationsItems = ({certifications}: CertificationsProps) => {

  const {
    Title,
    description,
    certificationImage,
    buttonLabel,
    buttonHref,
    invertPosition,
    style,
    ALTImage
  } = certifications?.[0] || {};

  const usableStyle: ISharepointStyle = style && JSON.parse(style);

  const {
    headerStyle,
    titleStyle,
    descriptionStyle,
    backgroundColor,
    mainButtonBackgroundColor,
    mainButtonColor,
    outerButtonShadowColor,
    innerButtonShadowrColor, 
    secondaryButtonBackgroundColor
} = usableStyle || {};

  return (
    <section className="certifications span-1-12" style={{flexDirection: invertPosition === 'SI' ? 'row-reverse' : 'row', backgroundColor: backgroundColor}}>
        <article className="certifications-item" style={{...headerStyle}}>
            <h1 style={{...titleStyle}}>{Title}</h1>
            <p style={{...descriptionStyle}}>{description}</p>
        </article>
        <aside className="certifications-item">
            <div className="certifications-item-image">
              {certificationImage && <Image src={getMediaPath(certificationImage)} alt={ALTImage} layout='fill' objectFit="scale-down" priority />}  
            </div>
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
        </aside>
    </section>
  );
};
