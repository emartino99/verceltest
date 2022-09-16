import { useState, useEffect } from "react";
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

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <>
            {
                isMounted ?
                    <article className="cervellone-card">
                        <h1>{title}</h1>
                        <div className="cervellone-card-content" style={{flexFlow: flexFlow}}>
                            <div className="cervellone-card-image">
                                { image && <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" priority /> }
                            </div>
                            <div className="cervellone-card-description">
                                <p dangerouslySetInnerHTML={{  __html: description ?? '' }}></p>
                            </div>
                        </div>
                    </article>
                : null
            }
        </>
    );
};
