import { useEffect, useRef } from "react";
import Image from "next/image";
import { IVision } from "../../../models";

interface VisionProps {
    vision: IVision[] | undefined;
}

export const Vision = ({vision}: VisionProps) => {

    const sectionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const {
        Title,
        visionDescription,
        missionTitle,
        missionDescription,
    } = vision?.[0] || {};

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.children[0].children[0].classList.add('vision-closed');
                    entry.target.children[1].classList.add('vision-description-container');
                    entry.target.children[2].children[0].classList.add('mission-closed');
                }
            });
        });
          
        observer.observe(sectionRef.current);
    }, []);

    return(
        <section className="vision span-1-12" ref={sectionRef}>
            <aside className='vision-container' style={{alignItems: 'flex-start'}}>
                <div>
                    <Image alt='vision'src={"/vision.png"} width={300} height={340} priority />
                    <h1>Vision</h1>
                    <div>
                        <Image alt='vision-logo'src={"/vision-logo.png"} width={147} height={65} />
                    </div>
                </div>
            </aside>
            <article>
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
                <div>
                    <Image alt='mission'src={"/mission.png"} width={300} height={340} />
                    <h1>Mission</h1>
                    <div>
                        <Image alt='mission-logo'src={"/mission-logo.png"} width={111} height={111} />
                    </div>
                </div>
            </aside>
        </section>
    );
};