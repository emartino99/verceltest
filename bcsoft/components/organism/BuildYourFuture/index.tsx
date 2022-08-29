import { CustomButton } from "../../atoms/CustomButton"
import { getMediaPath } from "../../../utils";
import { IFuture } from "../../../models";

interface FutureProps {
    future: IFuture[] | undefined;
}

export const BuildYourFuture = ({future}: FutureProps) => {

    const {
        Title,
        description,
        buttonLabel,
        buttonHref,
        backgroundImage
    } = future?.[0] || {};

    return (
        <section className="future span-1-12" style={{backgroundImage: backgroundImage && `url(${getMediaPath(backgroundImage)})`}}>
            <div className="future-content">
                <h1 dangerouslySetInnerHTML={{ __html: Title ?? "" }}></h1>
                <p dangerouslySetInnerHTML={{ __html: description ?? "" }}></p>
                {
                    buttonLabel &&
                        <CustomButton title={'GUARDA LE POSIZIONI APERTE'} href={buttonHref} />
                }
            </div>
        </section>
    );
};
