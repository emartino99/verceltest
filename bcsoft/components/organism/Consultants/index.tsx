import { useRef, useEffect } from 'react';
import { IConsultants } from '../../../models';
import { Map } from '../../atoms';

interface ConsultantsProps {
    consultants: IConsultants[] | undefined;
}

export const Consultants = ({consultants}: ConsultantsProps) => {

    const descriptionRef = useRef<HTMLDivElement>(null);

    const {
        Title,
        subtitle,
        description
    } = consultants?.[0] || {};

    useEffect(() => {
        if(descriptionRef.current && description) {
            descriptionRef.current.innerHTML = description;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="consultants span-1-12">
            <header>
                <h1>{Title}</h1>
                <span>{subtitle}</span>
                <p ref={descriptionRef}></p>
            </header>
            <div className='consultants-map'>
                <Map />
            </div>
        </section>
    );
};