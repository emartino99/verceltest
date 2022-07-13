import Image from "next/image";
import { IQuote } from "../../../models";

interface QuoteProps {
    quote: IQuote[] | undefined;
}

export const Quote = ({quote}: QuoteProps) => {

    const {
        Title,
        backgroundColor
    } = quote?.[0] || {};

    return (
        <section className="quote span-1-12" style={{backgroundColor: backgroundColor ?? '#ffffff'}}>
            <Image src={'/logo.png'} alt={'bcsoft-logo'} height={243} width={307} />
            <h1>{Title}</h1>
        </section>
    );
};