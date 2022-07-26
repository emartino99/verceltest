import Image from "next/image";
import { FlexDirection } from "../../../models";
import { getMediaPath } from "../../../utils";

interface CardAvaiableServicesProps {
    title: string;
    backgroundColor: string;
    borderColor: string;
    flexDirection: FlexDirection;
    image: string;
    cardMinHeight: string;
    textColor: string;
    cardPosition: string;
}

export const CardAvaiableServices = ({
    title, 
    backgroundColor, 
    borderColor,
    flexDirection,
    image,
    cardMinHeight,
    textColor,
    cardPosition
}: CardAvaiableServicesProps) => {
    return (
        <article 
            className="avaiable-services-item-card-container" 
            style={{justifyContent: cardPosition}}
        >
            <div 
                className="avaiable-services-item-card"
                style={{backgroundColor: backgroundColor, border: `2px solid ${borderColor}`, minHeight: cardMinHeight, flexDirection: flexDirection}}
            >
                {
                    image &&
                        <div className="avaiable-services-item-card-image">
                            <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" /> 
                        </div>
                }
                <h1 style={{color: textColor}} >{title}</h1>
            </div>
        </article>
    );
};
