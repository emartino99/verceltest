import { ILocations, IPosition } from "../../../models";

interface CardLocationsProps{
    position?: IPosition,
    selectedLocation: ILocations
}

export function CardLocations({position, selectedLocation}: CardLocationsProps): JSX.Element {

    const sendEmailTo = (email:string) => window.open(`mailto:${email}`, '_blank');
    
    return <div 
            className='grid template-col-autofill locations-card'
            style={{top: position?.y, left: position?.x}}
        >
            <p>{selectedLocation.Indirizzo_x0020_sede}</p>
            <p>{selectedLocation.Telefono}</p>
            <p>{selectedLocation.Fax}</p>
            <p className='pointer locations-card-email' onClick={() => sendEmailTo(selectedLocation.Email)}>{selectedLocation.Email}</p>
    </div>
}