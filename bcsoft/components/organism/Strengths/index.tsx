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
            <StrengthsContainer arrayToMap={strengths} objectCss={firstContainer} cssClass='container1' />
            <StrengthsContainer arrayToMap={strenghtsSecondContainer} objectCss={secondContainer} cssClass='container2' />
            <StrengthsContainer arrayToMap={strenghtsThirdContainer} objectCss={thirdContainer} cssClass='container3' />
        </section>
    );
};
