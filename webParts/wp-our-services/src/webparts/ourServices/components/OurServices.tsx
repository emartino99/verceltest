import * as React from 'react';
import Consulenza from './Consulenza';
import { IOurServicesProps } from './IOurServicesProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import SviluppoSoftware from './SviluppoSoftware';
import Formazione from './Formazione';

const OurServices:React.FC<IOurServicesProps> = (props) => {

  const {
    mainTitle,
    mainTitleColor,
    mainTitleSize,
    mainTitleWeight,
    mainDescription,
    mainDescriptionColor,
    mainDescriptionSize,
    mainDescriptionWeight,
    btnLabel,
    btnUrl,
    SviluppoSoftwarebtnLabel,
    SviluppoSoftwarebtnUrl,
    FormazionebtnLabel,
    FormazionebtnUrl,
    sp
  } = props;

  return(
    <div className="section" style={{minWidth: '100%'}}>
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center text-center' style={{width: '75%'}}>
            <h3 
              className={`w-100 px-3 ${mainTitleWeight}`} 
              style={{ fontSize: mainTitleSize?.toString() + "em", color: mainTitleColor }} 
              dangerouslySetInnerHTML={{ __html: mainTitle ?? "" }}>
            </h3>
            <span 
              className={`w-100 px-3 ${mainDescriptionWeight}`} 
              style={{ fontSize: mainDescriptionSize?.toString() + "em", color: mainDescriptionColor }} 
              dangerouslySetInnerHTML={{ __html: mainDescription ?? "" }}>
            </span>
          </div>
          <Consulenza
            label={btnLabel}
            href={btnUrl}
          />
          <SviluppoSoftware 
            label={SviluppoSoftwarebtnLabel}
            href={SviluppoSoftwarebtnUrl}
            sp={sp}
          />
          <Formazione
            label={FormazionebtnLabel}
            href={FormazionebtnUrl}
            sp={sp}
          />
        </div>
      </div>
    </div >
  );
};

export default OurServices;