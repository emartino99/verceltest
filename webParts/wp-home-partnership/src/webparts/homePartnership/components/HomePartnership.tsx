import * as React from 'react';
import { IHomePartnershipProps } from './IHomePartnershipProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';

const HomePartnership: React.FC<IHomePartnershipProps> = (props) => {

  const {
    backgroundColor,
    partners,
    imageWidth
  } = props;

  return (
    <div 
      className='section d-flex flex-column justify-content-center align-items-center py-4'
      style={{ backgroundColor: backgroundColor ?? 'trasparent', border: '1px solid #707070' }}
    >
      {partners?.filter(x => x.active === true).map((item, i) => {
        const pari = i % 2 === 0;
        const direction = pari ? 'start' : 'end';
        const reverseDirection = pari ? 'end' : 'start';
        return(
          <div className='d-flex flex-wrap justify-content-center align-items-center w-100' style={{flexDirection: pari ? 'row' : 'row-reverse', gap: '2rem'}}>
            <div className={`d-flex justify-content-${reverseDirection}`} style={{flex: 1}}>
              <h2 className='bold text-center text-md-end' style={{ color: item.titleColor ?? 'black' }} dangerouslySetInnerHTML={{__html:item.partnerTitle ?? ""}}></h2>
            </div>
            <div className={`d-flex justify-content-${direction}`} style={{flex: 1, backgroundColor: item.imageBackgroundColor ?? "trasparent"}}>
              <div style={{maxWidth: imageWidth?.toString() + "em", height: 'auto'}}>
                <img src={item.partnerImageUrl}></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default HomePartnership;