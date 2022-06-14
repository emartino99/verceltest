import * as React from 'react';
import { IContactUsBannerProps } from './IContactUsBannerProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import { BcButton } from 'bc-button';

const ContactUsBanner: React.FC<IContactUsBannerProps> = (props) => {

  const {
    backgroundColor,
    titleColor,
    title,
    titleSize,
    titleWeight,
    descriptionColor,
    description,
    descriptionSize,
    descriptionWeight,
    textAlign,
    changeLayoutDirection,
    btnLabel,
    btnUrl,
    btnClass
  } = props;

  return(
    <div className='section' style={{ backgroundColor: backgroundColor, minHeight: 175, clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' }}>
      <div className='container px-0'>
        <div 
          className={`col-12 px-0 d-flex flex-wrap justify-content-center align-items-center p-5 text-${textAlign}`}
          style={{flexDirection: !changeLayoutDirection ? 'row' : 'column'}}
        >
          <div>
            <h3
              className={`${titleWeight} p-4`}
              style={{ color:titleColor, fontSize: titleSize.toString() + "em" }}
              dangerouslySetInnerHTML={{  __html: title }}>
            </h3>
            <span
              className={`${descriptionWeight} p-4`}
              style={{ color:descriptionColor, fontSize: descriptionSize.toString() + "em" }}
              dangerouslySetInnerHTML={{  __html: description }}>
            </span>
          </div>

          <div>
            quadratino
          </div>
          
          <BcButton
            label={btnLabel}
            enableLink={true}
            href={btnUrl}
            buttonClass={btnClass}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;