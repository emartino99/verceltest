import { ICardsCoursesMasters, ICoursesMastersMainSettings } from "../../../models";
import { CustomButton } from "../../atoms/CustomButton";
import { CardCoursesMasters } from "../../molecule";

interface CoursesMastersProps {
    coursesMastersMainSettings: ICoursesMastersMainSettings[] | undefined;
    cardsCoursesMasters: ICardsCoursesMasters[] | undefined;
}

export const CoursesAndMasters = ({coursesMastersMainSettings, cardsCoursesMasters}: CoursesMastersProps) => {

    const {
        Title,
        mainDescription,
        secondaryTitle,
        secondaryDescription,
        buttonLabel,
        buttonHref
    } = coursesMastersMainSettings?.[0] || {};

    const firstHalf = cardsCoursesMasters?.filter((_item, index) => index % 2 === 0);
    const secondHalf = cardsCoursesMasters?.filter((_item, index) => index % 2 !== 0);

    return (
        <section className="courses-masters span-1-12">
            {
                (Title || mainDescription) &&
                    <header>
                        <h1>{Title}</h1>
                        <p>{mainDescription}</p>
                    </header>
            }
            <div className="courses-masters-container">
                <div className="courses-masters-header">
                    <h1>{secondaryTitle}</h1>
                    <p>{secondaryDescription}</p>
                    { buttonLabel && <CustomButton title={buttonLabel} href={buttonHref} />}
                </div>

                <div className="courses-masters-item">
                    {
                        firstHalf?.map(card => (
                            <CardCoursesMasters
                                key={card.ID}
                                title={card.Title} 
                                description={card.description} 
                                image={card.image}
                                backgroundColor={card.backgroundColor}
                            />
                        ))
                    }
                </div>
                <div className="courses-masters-item">
                    {
                        secondHalf?.map(card => (
                            <CardCoursesMasters
                                key={card.ID}
                                title={card.Title} 
                                description={card.description} 
                                image={card.image}
                                backgroundColor={card.backgroundColor}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};