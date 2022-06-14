import * as React from 'react';
import { IMissionAndVisionProps } from './IMissionAndVisionProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/MissionAndVision.css';

const MissionAndVision: React.FC<IMissionAndVisionProps> = (props) => {

  const {
    backgroundColor,
    visionTitle,
    visionTitleColor,
    visionDescription,
    visionDescriptionColor,
    missionTitle,
    missionTitleColor,
    missionDescription,
    missionDescriptionColor
  } = props;

  return(
    <div className="section" style={{ backgroundColor: backgroundColor }} >
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-row flex-nowrap justify-content-center align-items-start'>
            <div className='d-flex justify-content-center align-items-start position-relative mission-vision-container'>
              <div className='vision-closed position-absolute'>
                <img src={require('../img/vision.png')} alt="vision" />
                <h1>Vision</h1>
                <div>
                  <img src={require('../img/vision.svg')} alt="" />
                </div>
              </div>
            </div>
             <div className='d-flex flex-column justify-content-center vision-description-container'>
              <div>
                <h2 style={{ color: visionTitleColor }}>{visionTitle}</h2>
                <p style={{ color: visionDescriptionColor }}>{visionDescription}</p>
              </div>
              <div>
                <h2 style={{ color: missionTitleColor }}>{missionTitle}</h2>
                <p style={{ color: missionDescriptionColor }}>{missionDescription}</p>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-end position-relative mission-vision-container'>
              <div className='mission-closed position-absolute'>
                <img src={require('../img/mission.png')} alt="mission" />
                <h1>Mission</h1>
                <div>
                  <img src={require('../img/mission.svg')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;