import { useLocationsHook } from '../../../services';
import { CardLocations } from '../../molecule';
import { Map } from '../../atoms';

export function Locations() {

  const { 
    position,
    error
} = useLocationsHook();

  const {
    backgroundColor,
    title,
    secondaryTitle,
    description,
  } = {
    backgroundColor: '#fff',
    title: 'I nostri consulenti',
    secondaryTitle: 'Copriamo quasi tutto il territorio nazionale',
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con",
  };

  return(
    <section
      className='locations span-1-12'
      style={{ backgroundColor: backgroundColor }}
    >
      <Map />
      <div className='locations-text'>
        <h1 dangerouslySetInnerHTML={{  __html: title }}></h1>
        <span dangerouslySetInnerHTML={{  __html: secondaryTitle }}></span>
        <p dangerouslySetInnerHTML={{  __html: description }}></p>
      </div>
      {
        position?.selectedLocation && <CardLocations position={position} />
      }

    </section>
  );
};