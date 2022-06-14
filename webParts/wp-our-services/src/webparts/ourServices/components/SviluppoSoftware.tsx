import * as React from 'react';
import { IOurServicesComponentsProps } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/SviluppoSoftware.css';
import { BcButton } from 'bc-button';
import UseOurServices from '../hooks/UseOurServices';

const SviluppoSoftware:React.FC<IOurServicesComponentsProps> = (props) => {

    const {
        label,
        href,
        sp
    } = props;

    const {
        sviluppoSoftwareCards
    } = UseOurServices(sp);

    return(
        <div className='d-flex flex-row justify-content-center align-items-center sviluppo-software-container text-center'>
            <div className='d-flex flex-column justify-content-center align-items-center sviluppo-software-cards-container'>

                {
                    sviluppoSoftwareCards.length && sviluppoSoftwareCards.map((card, index) => {
                        const isOdd = index % 2 === 0;
                        const color = isOdd ? '#DAB006' : '#3AAFA9';
                        const direction = isOdd ? 'start' : 'end';
                        return(
                            <div className={`d-flex justify-content-${direction} align-items-center`} style={{width: '80%'}}>
                                <div className='d-flex justify-content-center align-items-center sviluppo-software-cards' style={{border: `3px solid ${color}`}}>
                                    <div>
                                        <img src={card.icona} alt={card.Title} />
                                    </div>
                                    <div>
                                        <h3 style={{color: color}}>{card.Title}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    }) 
                }

            </div>
            <div className='d-flex flex-column justify-content-center align-items-center sviluppo-software-description'>
                <div>
                    <h2>Sviluppo software</h2>
                    <p>
                        I progetti di sviluppo software sono realizzati secondo le metodologie dell’Agile software development.
                        Un approccio che consente di ridurre gli sprechi e ottenere risultati più significativi e qualitativi
                    </p>
                </div>
                <div>
                    <img src={require('../img/code-gradient.png')} alt="gears" />
                </div>
                <BcButton 
                    label={label} 
                    enableLink={true} 
                    href={href} 
                />
            </div>
        </div>
    );
};

export default SviluppoSoftware;