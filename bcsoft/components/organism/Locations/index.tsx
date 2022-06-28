import { useLocationsHook } from '../../../services';
import { LocationsMap } from '../../../assets';
import { CardLocations } from '../../molecule';

export function Locations() {

   //todo spostare l'svg ed importarlo
   //todo mettere la maggioraprte della logica dentro un custom hook.
   //todo effettuo prima il controllo legato a data-regione. se è positivo creo l'oggetto altrimenti è undefined.
   //todo il filter.map dentro il jsx deve diventare uno useMemo.
   //todo inserire html semantico
   //todo sistemare il css.
   //la card è una molecola, spostare tutto dentro la cartella molecule e importare nel jsx.

  const { 
    position,
    selectedLocation,
    error
} = useLocationsHook();

  const {
    rotate,
    backgroundColor,
    title,
    titleColor,
    titleSize,
    titleWeight,
    description,
    descriptionColor,
    descriptionSize,
    descriptionWeight,
  } = {
    rotate: false,
    backgroundColor: '#fff',
    title: 'todo',
    titleColor: 'red',
    titleSize: 1.4,
    titleWeight: 'normal',
    description: 'todo',
    descriptionColor: 'blue',
    descriptionSize: 1,
    descriptionWeight: 'normal',
  };

  return(
    <section
      className='locations span-1-12'
      style={{backgroundColor: backgroundColor, flexDirection: rotate ? 'row-reverse' : 'row'}}
    >
      <LocationsMap className="pointer" width="550" height="500" />
      <div>
        <h1 
          className={`${titleWeight}`} 
          style={{ color: titleColor, fontSize: titleSize.toString() + "em" }} 
          dangerouslySetInnerHTML={{  __html: title }}>
        </h1>
        <span
          className={`${descriptionWeight}`}
          style={{ color:descriptionColor, fontSize: descriptionSize.toString() + "em" }} 
          dangerouslySetInnerHTML={{  __html: description }}>
        </span>
      </div>

      {
        selectedLocation && <CardLocations position={position} selectedLocation={selectedLocation} />
      }

    </section>
  );
};

export default Locations;