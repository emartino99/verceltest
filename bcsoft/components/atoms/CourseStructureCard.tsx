interface CourseStructureCardProps {
    title: string;
    description: string;
    isEven: boolean;
}

export const CourseStructureCard = ({title, description, isEven}: CourseStructureCardProps) => {
    return (
        <article className={`courses-structure-card ${isEven && 'even-card'}`}>
            <span className="main-text">{title}</span>
            <span className="secondary-text">{description}</span>
        </article>
    );
};
