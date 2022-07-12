import { firstLine, secondLine, thirdLine, firstLineResponsive, secondLineResponsive, thirdLineResponsive } from "../../../constants";
import { StrengthsContainer } from "../../molecule";
import { UseWindowSize } from "../../../hooks";

export const Strenghts = () => {

    const [width] = UseWindowSize();

    return (
        <section className="strengths span-1-12">
            <h1>I NOSTRI PUNTI DI FORZA</h1>
            {
                width > 1000 ?
                    <>
                        <StrengthsContainer arrayToMap={firstLine} />
                        <StrengthsContainer arrayToMap={secondLine}/>
                        <StrengthsContainer arrayToMap={thirdLine}/>
                    </> :
                    <>
                        <StrengthsContainer arrayToMap={firstLineResponsive}/>
                        <StrengthsContainer arrayToMap={secondLineResponsive}/>
                        <StrengthsContainer arrayToMap={thirdLineResponsive}/>
                    </>
            }
        </section>
    );
};
