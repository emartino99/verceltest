import * as React from 'react';
import { IWpJoinTheTeamProps } from './IWpJoinTheTeamProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/WpJoinTheTeam.css';
import {BcButton} from 'bc-button';

const WpJoinTheTeam: React.FC<IWpJoinTheTeamProps> = (props) => {

  const {
    backgroundColor,
    titleColor,
    title,
    titleSize,
    titleWeight,
    description,
    descriptionColor,
    descriptionSize,
    descriptionWeight,
    urlMedia,
    btnLabel,
    btnUrl,
    btnClass
  } = props;
  
  return(
    <div 
      className="section" 
      style={{ backgroundColor: backgroundColor, clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' }}
    >
      <img 
        className='position-absolute' 
        src={urlMedia} >
      </img>
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <div className='join-the-team-container d-flex flex-column flex-nowrap justify-content-around align-items-start'>
            <h2 
              className={`${titleWeight}`} 
              style={{ color: titleColor, fontSize: titleSize.toString() + "em" }} 
              dangerouslySetInnerHTML={{  __html: title }}>
            </h2>
            <span 
              className={`${descriptionWeight} mb-5`} 
              style={{ color:descriptionColor, fontSize: descriptionSize.toString() + "em" }} 
              dangerouslySetInnerHTML={{  __html: description }}>
            </span>
            <BcButton 
              label={btnLabel} 
              enableLink={true} 
              href={btnUrl} 
              buttonClass={btnClass} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpJoinTheTeam;