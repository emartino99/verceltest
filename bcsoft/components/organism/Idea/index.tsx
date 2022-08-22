import Image from "next/image";
import { IIdea, IIdeaMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface IdeaProps {
    idea: IIdea[] | undefined;
    ideaMainSettings: IIdeaMainSettings[] | undefined;
}

export const Idea = ({idea, ideaMainSettings}: IdeaProps) => {

    const {
        Title,
        buttonLabel,
        buttonHref
    } =  ideaMainSettings?.[0] || {};

    return (
        <section className="idea span-1-12">
            <header>
                <h1>{Title}</h1>
            </header>
            <div className="idea-container">
                {
                    idea?.map(card => (
                        <div className="content" key={card.ID}>
                            <div className="number-container">
                                <Image src={getMediaPath(card.numberImg)} alt={card.Title} layout="fill" objectFit="scale-down" />
                            </div>
                            <div className={`text-container pointer ${card.subtitleHover ? 'active' : ''}`}>
                                <h1>{card.Title}</h1>
                                    <span>{card.subtitleHover}</span>
                                    <p>{card.descriptionHover}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                buttonLabel && buttonHref &&
                    <CustomButton 
                        title={buttonLabel} 
                        href={buttonHref} 
                        mainBackgroundColor={'#ffffff'} 
                        mainColor={'#001f3c'}
                        secondaryBackgroundColor
                        outerShadowColor="#185fa2"
                        innerShadowrColor="#C9E2FF"
                    />
            }
        </section>
    );
};
