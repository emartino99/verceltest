import Image from "next/image";
import { IVision } from "../../../models";

interface VisionProps {
    vision: IVision[] | undefined;
}

export const Vision = ({vision}: VisionProps) => {

    const {
        Title,
        visionDescription,
        missionTitle,
        missionDescription,
    } = vision?.[0] || {};

    return(
        <section className="vision span-1-12">
            <aside className='vision-container' style={{alignItems: 'flex-start'}}>
                <div className='vision-closed'>
                    <Image alt='ciao'src={"/vision.png"} width={300} height={340} />
                    <h1>Vision</h1>
                    <div>
                        <Image alt='ciao'src={"/vision-logo.png"} width={147} height={65} />
                    </div>
                </div>
            </aside>
            <article className='vision-description-container'>
                <div>
                    <h1>{Title}</h1>
                    <p>{visionDescription}</p>
                </div>
                <div>
                    <h1>{missionTitle}</h1>
                    <p>{missionDescription}</p>
                </div>
            </article>
            <aside className='vision-container' style={{alignItems: 'flex-end'}}>
                <div className='mission-closed'>
                    <Image alt='ciao'src={"/mission.png"} width={300} height={340} />
                    <h1>Mission</h1>
                    <div>
                        <Image alt='ciao'src={"/mission-logo.png"} width={111} height={111} />
                    </div>
                </div>
            </aside>
        </section>
    );
};