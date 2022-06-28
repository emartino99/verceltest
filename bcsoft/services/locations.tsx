import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { ILocations, IPosition } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useLocationsHook = () => {

    const [position, setPosition] = useState<IPosition | undefined>(undefined);

    const { data: locationsInfo, error: locationsInfoError } = useSWR<ILocations[], Error>(ENDPOINTS.locations, getApi('locations'));

    const regionClickHandler = (element: Element) => {
        const elementPosition = element.getBoundingClientRect();
        setPosition(prevState => {
            if ( element.getAttribute('data-regione') === prevState?.selectedLocation ) return undefined;

            return {
                x: elementPosition.x + elementPosition.width - 170, 
                y: elementPosition.y - 150, 
                selectedLocation: element.getAttribute('data-regione')
            }
        })
    };
    
    useEffect(() => {
        const svgPaths = document.querySelectorAll('[data-regione]');
        svgPaths.forEach((element) => element.addEventListener('click', () => regionClickHandler(element)));

        return () => {
            svgPaths.forEach((element) => element.removeEventListener('click', () => regionClickHandler(element)));
        };
    }, []);

    const selectedLocation = useMemo(() => 
        position && locationsInfo?.find(regionToFilter => regionToFilter.Title.toLowerCase() === position?.selectedLocation?.toLowerCase())
    ,[locationsInfo, position?.selectedLocation]);
    
    //   useEffect(() => {
    //     const selectedColor:string = rotate ? '#F07A3C' : '#002950';
    //     const elissi = document.querySelectorAll('[data-name^=Ellisse]');
    //     elissi.forEach(elisse => elisse.setAttribute('fill', selectedColor));
    //   }, [rotate]);

    return {
        error: locationsInfoError,
        position,
        selectedLocation
    }
}