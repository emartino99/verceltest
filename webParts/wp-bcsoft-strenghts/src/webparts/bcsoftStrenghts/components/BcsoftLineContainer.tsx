import * as React from 'react';
import UseWindowSize from '../hooks/UseWindowsSize';
import { IBcsoftLine } from '../models';
import '../style/bcsoftStrenghts.css';

const BcsoftLineContainer = ({arrayToMap}: {arrayToMap: IBcsoftLine[]}) => {

    const [width] = UseWindowSize();

    const widthToRemove:number = width > 1000 ? .3 : .5;

    return(
        <div className="position-relative bcsoft-strenghts-line-container perspective">
            {
                arrayToMap.map(item => (
                    <>
                        <div 
                            className="position-absolute bcsoft-strenghts-card fade-in-delay-2" 
                            style={{top: item.top, left: item.left, backgroundColor: item.backgroundColor}}
                        >
                        </div>
                        {
                            item.img &&
                            <>
                                <div 
                                    className="position-absolute fade-in-delay-1" 
                                    style={{top: item.thinBorderTop, left: item.thinBorderLeft, width: 2, height: item.thinBorderHeight}}
                                >
                                    <img src={require('../img/thinBorder.png')} alt="thin border" />
                                </div>
                                <div 
                                    className="position-absolute bcsoft-strenghts-circle fade-in-delay-1"
                                    style={{top: item.thinBorderTop, left: parseFloat(item.thinBorderLeft) - widthToRemove + '%'}}
                                >
                                </div>
                                <div 
                                    className="position-absolute d-flex justify-content-center align-items-center fade-in" 
                                    style={{top: item.imgTop, left: item.imgLeft, gap: 15, flexDirection: item.flexDirection ? 'row-reverse' : 'row' }}
                                >
                                    <div className='fade-in'>
                                        <img src={require(`../img/${item.img}`)} alt="image" />
                                    </div>
                                    <div className='fade-in'>
                                        <p>{item.imgText}</p>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                  )
                )
            }
        </div>
    );
};

export default BcsoftLineContainer;



