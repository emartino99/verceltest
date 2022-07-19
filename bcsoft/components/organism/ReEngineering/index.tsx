import Image from "next/image";
import { IReEngineering } from "../../../models";
import { getMediaPath } from "../../../utils";

interface ReEngineeringProps {
    reEngineering: IReEngineering[] | undefined;
}

export const ReEngineering = ({reEngineering}: ReEngineeringProps) => {

    const {
        Title,
        description,
        image
    } = reEngineering?.[0] || {};

    return (
        <section className="reengineering span-1-12">
            <header className="reengineering-content">
                {
                    image && 
                        <div className="reengineering-image">
                            <Image src={getMediaPath(image)} alt={'cc'} layout='fill' objectFit="scale-down" />
                        </div>
                }
                <h1>{Title}</h1>
                <p>{description}</p>
            </header>
        </section>
    );
};
