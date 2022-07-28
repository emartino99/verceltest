import Image from "next/image";
import { getMediaPath } from "../../../utils";

interface CervelloneItemProps {
    title: string;
    image: string;
    description: string;
    flexFlow: string;
}

export const CervelloneItem = ({
    title,
    image,
    description,
    flexFlow
}: CervelloneItemProps) => {
    return (
        <article className="cervellone-card">
            <h1>{title}</h1>
            <div className="cervellone-card-content" style={{flexFlow: flexFlow}}>
                <div className="cervellone-card-image">
                    { image && <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" /> }
                </div>
                <div className="cervellone-card-description">
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};
