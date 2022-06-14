import * as React from 'react';
import { IBcsoftStrenghtsProps } from './IBcsoftStrenghtsProps';
import { firstLine, secondLine, thirdLine } from '../constants/constants';
import { firstLineResponsive, secondLineResponsive, thirdLineResponsive } from '../constants/constantsResponsive';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import BcsoftLineContainer from './BcsoftLineContainer';
import UseWindowSize from '../hooks/UseWindowsSize';

const BcsoftStrenghts:React.FC<IBcsoftStrenghtsProps> = (props) => {

  const [width] = UseWindowSize();

  return(
    <div className="section">
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column flex-nowrap justify-content-center align-items-center' style={{height: 1000}}>
            {
              width > 1000 ?
              <>
                <BcsoftLineContainer arrayToMap={firstLine} />
                <BcsoftLineContainer arrayToMap={secondLine} />
                <BcsoftLineContainer arrayToMap={thirdLine} />
              </> :
              <>
                <BcsoftLineContainer arrayToMap={firstLineResponsive} />
                <BcsoftLineContainer arrayToMap={secondLineResponsive} />
                <BcsoftLineContainer arrayToMap={thirdLineResponsive} />
              </>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BcsoftStrenghts;