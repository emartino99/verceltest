import { CardLocations } from '../../molecule';
import { Map } from '../../atoms';
import { useState, useCallback, useEffect } from 'react';
import { ILocations, ILocationsMainSettings, IPosition } from '../../../models';

interface LocationsProps {
  locationsInfo: ILocations[] | undefined;
  locationsMainSettings: ILocationsMainSettings[] | undefined;
}
export function Locations({locationsInfo, locationsMainSettings}: LocationsProps) {

  const [position, setPosition] = useState<IPosition>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const {
    Title,
    secondaryTitle,
    description,
    rotate
  } = locationsMainSettings?.[0] || {};

  const direction = rotate === 'SI' ? 'row-reverse' : 'row';

  const regionClickHandler = useCallback((element: Element) => {
      const elementPosition = element.getBoundingClientRect();
      setPosition(prevState => {
        const value = rotate === 'NO' ? elementPosition.x + elementPosition.width + 100 : elementPosition.left + elementPosition.width - 500;
        return ( element.getAttribute('data-regione')?.toLowerCase() === prevState?.selectedLocation?.Title?.toLowerCase())
          ? undefined
          : {
              x: value,
              y: elementPosition.y - ( elementPosition.y - 150),
              selectedLocation: locationsInfo?.find(regionToFilter => regionToFilter.Title.toLowerCase() === element.getAttribute('data-regione')?.toLowerCase())
          }
      })
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  useEffect(() => {

    if(!hasLoaded) {
      setHasLoaded(true);
      return;
    };

    const svgPaths = document.querySelectorAll('[data-regione]');
    svgPaths.forEach((element) => element.addEventListener('click', () => regionClickHandler(element), false));

    return () => {
      setHasLoaded(false);
      svgPaths.forEach((element) => element.removeEventListener('click', () => regionClickHandler(element)));
    };
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLoaded]);

  return(
    <section className='locations span-1-12' style={{flexDirection: direction}}> 
      <Map />
      <header className='locations-text'>
        <h1 dangerouslySetInnerHTML={{  __html: Title ?? '' }}></h1>
        <span dangerouslySetInnerHTML={{  __html: secondaryTitle ?? '' }}></span>
        <p dangerouslySetInnerHTML={{  __html: description ?? '' }}></p>
        <span className='click-region'>Seleziona le regioni per saperne di più</span>
      </header>
      {
        position?.selectedLocation && <CardLocations position={position} />
      }
    </section>
  );
};