import { CustomImage } from '../../atoms/CustomImage';
import { IPartners } from "../../../models";

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
                                <h1 dangerouslySetInnerHTML={{__html: item.Title}}></h1>
                            </aside>
                            <div className='partners-card-image' style={{justifyContent: `${i % 2 === 0 ? 'flex-start' : 'flex-end'}`}} >
                                <CustomImage title={item.Title} relativePath={item.PartnerIMG} width={439} height={113} />
                            </div>
                        </article>
                    )
                })
            }
        </section>
    );
};