import Image from "next/image";
import { ICoursesStructure, ICoursesStructureMainSettings } from "../../../models";
import { getMediaPath } from "../../../utils";
import { CourseStructureCard } from "../../atoms";

interface CoursesStructureProps {
    coursesStructure: ICoursesStructure[] | undefined;
    coursesStructureMainSettings: ICoursesStructureMainSettings[] | undefined;
}

export const CoursesStructure = ({coursesStructure, coursesStructureMainSettings}: CoursesStructureProps) => {

    const {
        Title,
        description,
        headerImage,
        cardsBackgroundImage
    } = coursesStructureMainSettings?.[0] || {};

    return (
        <section className="courses-structure span-1-12">
            <div className="corses-image-container">
                { headerImage && <Image src={getMediaPath(headerImage)} alt='ciao' layout="fill" objectFit="scale-down" /> }
            </div>
            <div className="courses-structure-container">
                <header className="courses-structure-item">
                    <div>
                        <h1>{Title}</h1>
                        <p>{description}</p>
                    </div>
                </header>
                <aside className="courses-structure-item">
                    { cardsBackgroundImage && <Image src={getMediaPath(cardsBackgroundImage)} alt='ciao' layout="fill" objectFit="scale-down" /> }
                    <div className="card-container">
                        {coursesStructure?.map( (card, index) => {
                            const isEven = (index + 1) % 2 === 0;
                            return(
                                <CourseStructureCard
                                    key={card.ID}
                                    title={card.Title} 
                                    description={card.description} 
                                    isEven={isEven} 
                                />
                            );
                        })}
                    </div>
                </aside>
            </div>
        </section>
    );
};