import Image from 'next/image';
import { IPartners } from "../../../models";
import { getMediaPath } from '../../../utils';

interface PartnesProps {
    partners: IPartners[] | undefined;
};

export function Partners({partners}: PartnesProps) {

    return (
        <section className='partners span-1-12'>
            {
                partners?.map((item, i) => {
                    return(
                        <article key={item.ID} className='partners-card' style={{flexDirection: `${i % 2 === 0 ? 'row' : 'row-reverse'}` }}>
                            <aside className='partners-card-title' style={{ justifyContent: `${i % 2 === 0 ? 'flex-end' : 'flex-start'}` }} >
                                <h1 dangerouslySetInnerHTML={{__html: item.PartnerLabel}} ></h1>
                            </aside>
                            <div className='partners-card-image-container' style={{justifyContent: `${i % 2 === 0 ? 'flex-start' : 'flex-end'}`}} >
                                <div className='partners-card-image-content'>
                                    <Image src={getMediaPath(item.PartnerIMG)} alt={item.Title} layout='fill' objectFit='scale-down' priority />
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    );
};