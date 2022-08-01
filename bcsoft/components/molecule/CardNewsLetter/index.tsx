import Image from "next/image";
import { getMediaPath } from "../../../utils";

interface CardNewsLetterProps {
    title: string;
    description: string;
    image: string;
}

export const CardNewsLetter = ({
    title,
    description,
    image
}: CardNewsLetterProps) => {
    return (
        <div className="newsletter-container">
            <div className="newsletter-image">
                <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" />
            </div>
            <div className="newsletter-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};
