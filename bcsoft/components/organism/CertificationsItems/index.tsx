import Image from "next/image";
import { ICertifications } from "../../../models";
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
    invertPosition
  } = certifications?.[0] || {};

  return (
    <section className="certifications span-1-12" style={{flexDirection: invertPosition === 'SI' ? 'row-reverse' : 'row'}}>
        <article className="certifications-item">
            <h1>{Title}</h1>
            <p>{description}</p>
        </article>
        <aside className="certifications-item" style={{gap: '6rem'}}>
            <div className="certifications-item-image">
              {certificationImage && <Image src={getMediaPath(certificationImage)} alt={'Title'} layout='fill' objectFit="scale-down" priority/>}  
            </div>
            {
              buttonLabel &&
                <CustomButton title={buttonLabel} href={buttonHref} />
            }
        </aside>
    </section>
  );
};
