import { ILaBellaEstateHero } from "../../../models";
import { getMediaPath } from "../../../utils";

interface LaBellaEstateHeroProps {
    laBellaEstate: ILaBellaEstateHero[] | undefined;
}

export const LaBellaEstateHero = ({laBellaEstate}: LaBellaEstateHeroProps) => {

    const {
        Title,
        description,
        backgroundImage
    } = laBellaEstate?.[0] || {};

    return (
        <section className="estate span-1-12" style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})` }}>
            <header>
                <p>{description}</p>
            </header>
        </section>
    );
};
