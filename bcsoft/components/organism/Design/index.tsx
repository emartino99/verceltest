import Image from "next/image";
import { IDesignCommunication, IDesignCommunicationMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface DesignCommunicationProps {
    design: IDesignCommunication[] | undefined;
    communication: IDesignCommunication[] | undefined;
    designAndCommunication: IDesignCommunicationMainSettings[] | undefined;
}

export const Design = ({design, communication, designAndCommunication}: DesignCommunicationProps) => {

    const {
        designImage,
        communicationImage,
        image,
        buttonLabel,
        buttonHref
    } = designAndCommunication?.[0] || {};

    return (
        <section className="design span-1-12">
            <article className="design-container">
                <div className="design-item design-content">
                    <h1>DESIGN</h1>
                    <div className="design-image">
                        {designImage && <Image src={getMediaPath(designImage)} alt='design-logo' layout='fill' objectFit="scale-down" />}
                    </div>
                    { design?.map(item => <span key={item.ID}>{item.Title}</span>) }
                </div>
                <div className="design-item communication-content">
                    <h1>COMMUNICATION</h1>
                    { communication?.map(item => <span key={item.ID}>{item.Title}</span>) }
                    <div className="communication-image">
                    {communicationImage && <Image src={getMediaPath(communicationImage)} alt='communication-logo' layout='fill' objectFit="scale-down" />}
                    </div>
                </div>
            </article>
            <div className="bottom-image">
                {image && <Image src={getMediaPath(image)} alt='logo' layout='fill' objectFit="scale-down" />}
            </div>
            {
                buttonLabel &&
                    <CustomButton title={buttonLabel} href={buttonHref} />
            }
        </section>
    );
};
