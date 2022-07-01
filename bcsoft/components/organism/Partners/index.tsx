import { usePartnersHook } from '../../../services/partners';
import { getRelativePath } from '../../../utils';
export function Partners() {

    const { 
        partners,
        error
    } = usePartnersHook();

    console.log("partne", partners);

    return (
        <div  className='section d-flex flex-column justify-content-center align-items-center py-4'>
            <h1>PARTNERS</h1>
            {   partners?.map((item, i) => {
                const pari = i % 2 === 0;
                const direction = pari ? 'start' : 'end';
                const reverseDirection = pari ? 'end' : 'start';
                console.log("ciao", getRelativePath(item.PartnerIMG))
            return(
              <div key={item.Title} className='d-flex flex-wrap justify-content-center align-items-center w-100' style={{flexDirection: pari ? 'row' : 'row-reverse', gap: '2rem'}}>
                <div className={`d-flex justify-content-${reverseDirection}`} style={{flex: 1}}>
                  <h2 className='bold text-center text-md-end' dangerouslySetInnerHTML={{__html: item.Title}}></h2>
                </div>
                <div className={`d-flex justify-content-${direction}`} style={{flex: 1, backgroundColor: "trasparent"}}>
                  <div>
                    {item.PartnerIMG && <img src={`${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}${getRelativePath(item.PartnerIMG)}`} alt={item.Title} className='' />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
};

export default Partners;