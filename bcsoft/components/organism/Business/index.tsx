import { useBusinessHook } from "../../../services"; 
import { CardBuisiness } from "../../molecule";

export function Business() {

    const { coreBusiness, coreBusinessCards, error } = useBusinessHook(); 
    const { 
        Title, 
        Subtitle, 
    } = coreBusiness?.[0] || {}
 
    return (
        <section className="business span-1-12">
            <header className='business-header'>
                <h1 className='title'>{Title}</h1>
                {Subtitle && <span className='subtitle ' dangerouslySetInnerHTML={{ __html: Subtitle }}></span>}
            </header>
            <div className='grid template-col-autofill'>
                {coreBusinessCards?.map((item, i) => (
                    <CardBuisiness item={item} i={i} key={item.ID} />
                ))}
            </div>
        </section>
    );
};