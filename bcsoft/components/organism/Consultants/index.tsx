import { IConsultants } from '../../../models';
import { Map } from '../../atoms';

interface ConsultantsProps {
    consultants: IConsultants[] | undefined;
}

export const Consultants = ({consultants}: ConsultantsProps) => {

    const {
        Title,
        subtitle,
        description
    } = consultants?.[0] || {};

    return (
        <section className="consultants span-1-12">
            <header>
                <h1>{Title}</h1>
                <span>{subtitle}</span>
                <p>{description}</p>
            </header>
            <div className='consultants-map'>
                <Map />
            </div>
        </section>
    );
};