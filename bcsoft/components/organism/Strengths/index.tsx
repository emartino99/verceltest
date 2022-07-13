import { firstContainer, secondContainer, thirdContainer } from "../../../constants";
import { StrengthsContainer } from "../../molecule";
import { IStrengths } from "../../../models";

interface StrengthsProps {
    strengths: IStrengths[] | undefined;
    strenghtsSecondContainer: IStrengths[] | undefined;
    strenghtsThirdContainer: IStrengths[] | undefined;
}

export const Strenghts = ({strengths, strenghtsSecondContainer, strenghtsThirdContainer}: StrengthsProps) => {

    return (
        <section className="strengths span-1-12">
            <h1>I NOSTRI PUNTI DI FORZA</h1>
            <StrengthsContainer arrayToMap={strengths} objectCss={firstContainer} />
            <StrengthsContainer arrayToMap={strenghtsSecondContainer} objectCss={secondContainer} />
            <StrengthsContainer arrayToMap={strenghtsThirdContainer} objectCss={thirdContainer} />
        </section>
    );
};
