import * as React from 'react';
import { IWpBcsoftLogoAboveFooterProps } from './IWpBcsoftLogoAboveFooterProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';

const WpBcsoftLogoAboveFooter: React.FC<IWpBcsoftLogoAboveFooterProps> = (props) => {

  const {
    backgroundColor,
    title,
    titleColor,
    titleWeight,
    titleSize
  } = props;

  console.table(props);

  return(
    <div className="section" style={{ backgroundColor: backgroundColor, clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' }}>
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <div style={{marginBottom: 50}}>
            <img src={require('../img/bcsoft-logo.png')} alt="bcsoft-logo" />
          </div>
          <h2 className={`text-center ${titleWeight}`} style={{ color: titleColor, fontSize: titleSize.toString() + "em" }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default WpBcsoftLogoAboveFooter;