import * as React from 'react';
import { BcButton } from 'bc-button';
import UseOurServices from '../hooks/UseOurServices';
import { IOurServicesComponentsProps } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/Formazione.css';

const Formazione:React.FC<IOurServicesComponentsProps> = (props) => {

    //todo il button deve essere bianco

    const {
        label,
        href,
        sp
    } = props;

    const { formazioneCards } = UseOurServices(sp);

    return(
        <div className='d-flex flex-column justify-content-center align-items-center text-center formazione-container' style={{gap: '2rem'}}>

            <div>
                <h2>Formazione</h2>
                <p>
                    Partiamo da un’attenta analisi dei bisogni e attitudini degli studenti per offrire corsi personalizzati nei 
                    contenuti e nella didattica. Alleniamo tecnica e soft skills per fornire gli strumenti giusti ad affrontare il mercato del lavoro
                </p>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-wrap' style={{gap: '1.5rem'}}>
                {
                    formazioneCards.length && formazioneCards.map(card => {
                        return(
                            <div className='d-flex justify-content-center align-items-center formazione-card'>
                                <p>{card.Title}</p>
                            </div>
                        );
                    })
                }
            </div>

            <BcButton 
                label={label} 
                enableLink={true} 
                href={href} 
            />
            
        </div>
    );
};

export default Formazione;