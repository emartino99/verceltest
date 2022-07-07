import { ILocations, IPosition } from "../../../models";

interface CardLocationsProps{
    position?: IPosition,
}

export function CardLocations({ position }: CardLocationsProps): JSX.Element {

    const sendEmailTo = (email:string | undefined) => window.open(`mailto:${email}`, '_blank');
    
    return <article 
            className='locations-card'
            style={{top: position?.y, left: position?.x}}
        >
            <p>{position?.selectedLocation?.Indirizzo_x0020_sede}</p>
            <p>{position?.selectedLocation?.Telefono}</p>
            <p>{position?.selectedLocation?.Fax}</p>
            <p className='pointer locations-card-email' onClick={() => sendEmailTo(position?.selectedLocation?.Email)}>{position?.selectedLocation?.Email}</p>
    </article>
}