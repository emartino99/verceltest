import { IDeveloperCard, IDevelopmentMainSettings } from "../../../models";
import { CardDeveloper } from "../../molecule";

interface EstateDevelopmentTeamProps {
    developmentTeam: IDeveloperCard[] | undefined;
    developmentTeamMainSettings: IDevelopmentMainSettings[] | undefined;
}

export const EstateDevelopmentTeam = ({developmentTeam, developmentTeamMainSettings}: EstateDevelopmentTeamProps) => {

    const {
        Title,
        description
    } = developmentTeamMainSettings?.[0] || {};

    return (
        <section className="development-team span-1-12">
            <header>
                <h1>{Title}</h1>
                <p>{description}</p>
            </header>
            <div className="development-team-content">
                { developmentTeam?.map(card => <CardDeveloper key={card.ID} name={card.Title} image={card.image} /> ) }
            </div>
        </section>
    );
};
