import * as React from 'react';
import { IHistoryCardProps } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/BcsoftHistory.css';

const HistoryCard:React.FC<IHistoryCardProps> = (props) => {

    const {
        isEven,
        yearToShow,
        isTheLastOne,
        isActive
    } = props;

   if(isEven){
       return(
            <>
                <div className='d-flex justify-content-center align-items-center position-relative history-card-even-container'>
                    <h3 className={`${isActive && 'show-text'}`} >{yearToShow}</h3>
                    <div className={`position-absolute ${isActive && 'history-card-even-lower-left-border'}`} ></div>
                    <div className={`position-absolute ${isActive && 'history-card-even-upper-top-border'}`} ></div>
                    <div className={`position-absolute ${isActive && 'history-card-even-lower-bottom-border'}`} ></div>
                    <div className={`position-absolute ${isActive && 'history-card-even-upper-left-border'}`} ></div>
                    <div className={`position-absolute ${isActive && 'history-card-even-lower-right-border'}`} ></div>
                    <div className={`position-absolute ${isActive && 'history-card-even-upper-right-border'}`} ></div>
                </div>
                {
                    !isTheLastOne && 
                        <div className='d-flex justify-content-center align-items-end history-card-even-circle-container'>
                            <div className={`position-relative ${isActive && 'history-card-even-circle-line'}`} >
                                <div className='position-absolute history-card-even-circle'></div>
                            </div>
                        </div>
                }  
            </>
       );
   }else{
       return(
        <>
            <div className='d-flex justify-content-center align-items-center position-relative history-card-odd-container' >
                <h3 className={`${isActive && 'show-text'}`} >{yearToShow}</h3>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-left-border'}`} ></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-top-border'}`} ></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-right-border'}`} ></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-left-border'}`} ></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-bottom-border'}`} ></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-right-border'}`} ></div>
            </div>
            {
                !isTheLastOne && 
                    <div className='d-flex justify-content-center align-items-start history-card-odd-circle-container'>
                        <div className={`position-relative ${isActive && 'history-card-odd-circle-line'}`} >
                            <div className='position-absolute history-card-odd-circle'></div>
                        </div>
                    </div>
            }
        </>
       );
   }

};

export default HistoryCard;