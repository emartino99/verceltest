import { usePartnersHook } from '../../../services/partners';
import { getRelativePath } from '../../../utils';

export function Partners() {

    const { 
        partners,
        error
    } = usePartnersHook();

    return (
        <div className='partners span-1-12'>
            {
                partners?.map((item, i) => {
                    return(
                        <div key={item.ID} className='partners-card' style={{flexDirection: `${i % 2 === 0 ? 'row' : 'row-reverse'}` }}>
                            <div className='partners-card-title' style={{ justifyContent: `${i % 2 === 0 ? 'flex-end' : 'flex-start'}` }} >
                                <h2 dangerouslySetInnerHTML={{__html: item.Title}}></h2>
                            </div>
                            <div className='partners-card-image' style={{justifyContent: `${i % 2 === 0 ? 'flex-start' : 'flex-end'}`}} >
                                <div className='partners-card-image-container'>
                                    <div>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}${getRelativePath(item.PartnerIMG)}`} alt={item.Title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};