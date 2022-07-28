import Image from "next/image";
import { getMediaPath } from "../../../utils";

interface CardDeveloperProps {
    name: string;
    image: string;
}

export const CardDeveloper = ({name, image}: CardDeveloperProps) => {
    return (
        <article className="development-team-card">
            { 
                image &&
                    <div className="development-team-card-image">
                        <Image src={getMediaPath(image)} alt={'c'} layout='fill' objectFit="scale-down" />
                    </div> 
            }
            <span>{name}</span>
        </article>
    );
};
