import { IOurServices } from "../../../models";

interface OurServicesProps {
    ourServices: IOurServices[] | undefined;
}

export const OurServices = ({ourServices}: OurServicesProps) => {

    const {
        Title,
        description
    } = ourServices?.[0] || {};

    return (
        <section className="our-services span-1-12">
            <header>
                <h1>{Title}</h1>
                <p>{description}</p>
            </header>
        </section>
    );
};