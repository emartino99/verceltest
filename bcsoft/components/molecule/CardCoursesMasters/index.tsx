import { CustomButton } from "../../atoms/CustomButton";
import Image from "next/image";
import { getMediaPath } from "../../../utils";

interface CardCoursesMastersProps {
    title: string;
    description: string;
    image?: string;
    buttonLabel?: string;
    buttonHref?: string;
    backgroundColor: string;
}

export const CardCoursesMasters = ({
    title,
    description,
    image,
    buttonLabel,
    buttonHref,
    backgroundColor
    
}: CardCoursesMastersProps) => {

    const textColor = backgroundColor === '#001F3C' ? '#FFFFFF' : '#001F3C';

    return (
        <article 
            className="courses-masters-card-container"
            style={{backgroundColor: backgroundColor}}
        >
            <div className="courses-masters-card">
                <div className="courses-masters-image">
                    { image && <Image src={getMediaPath(image)} alt={title} layout="fill" objectFit="scale-down" /> }
                </div>
                <div className="courses-masters-title">
                    <h1 style={{color: textColor}}>{title}</h1>
                </div>
                <p style={{color: textColor}}>{description}</p>
                { buttonLabel && buttonHref && <CustomButton title={buttonLabel} href={buttonHref} /> }
            </div>
        </article>
    );
};
