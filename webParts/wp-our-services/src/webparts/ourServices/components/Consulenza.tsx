import * as React from 'react';
import { BcButton } from 'bc-button';
import { IOurServicesComponentsProps } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/Consulenza.css';

const Consulenza:React.FC<IOurServicesComponentsProps> = (props) => {

    const {
        label,
        href
    } = props;

    return(
        <div className='d-flex flex-column justify-content-center align-items-center consulenza-container text-center'>
            <div>
                <h2>Consulenza</h2>
                <p>
                    Aiutiamo grandi e piccole realtà ad <span> evolversi in termini di competitività e sviluppo </span>. 
                    Aiutiamo i nostri clienti ad utilizzare al meglio il digitale per aumentare le loro performance.
                </p>
            </div>
            <BcButton 
                label={label} 
                enableLink={true} 
                href={href} 
            />
        </div>
    );
};

export default Consulenza;