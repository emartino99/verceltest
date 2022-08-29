import Image from "next/image";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface HeaderAvaiableServicesProps {
    title: string | undefined;
    titleColor: string | undefined;
    description: string | undefined;
    image: string | undefined;
    buttonLabel: string | undefined;
    buttonHref: string | undefined;
}

export const HeaderAvaiableServices = ({
    title,
    titleColor,
    description,
    image,
    buttonLabel,
    buttonHref
}: HeaderAvaiableServicesProps) => {
    return (
        <header className="avaiable-services-item-header-container">
            <h1 style={{color: titleColor}}>{title}</h1>
            <p>{description}</p>
            <div className="avaiable-services-item-header-image">
                { image && <Image src={getMediaPath(image)} alt={title} layout='fill' objectFit="scale-down" /> }
            </div>
            <div className="avaiable-services-item-header-button">
                { buttonLabel && <CustomButton title={buttonLabel} href={buttonHref} /> }
            </div>
        </header>
    );
};
