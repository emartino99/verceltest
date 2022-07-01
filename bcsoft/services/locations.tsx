import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { ILocations, IPosition } from "../models";
import { getApi } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const useLocationsHook = () => {

    const [position, setPosition] = useState<IPosition>();

    const { data: locationsInfo, error: locationsInfoError } = useSWR<ILocations[], Error>(ENDPOINTS.locations, getApi('locations'));

    const regionClickHandler = useCallback((element: Element) => {
        const elementPosition = element.getBoundingClientRect();
        setPosition(prevState => {
           return ( element.getAttribute('data-regione')?.toLowerCase() === prevState?.selectedLocation?.Title?.toLowerCase())
            ? undefined
            : {
                x: elementPosition.x + elementPosition.width + 100,
                y: elementPosition.y - 250,
                selectedLocation: locationsInfo?.find(regionToFilter => regionToFilter.Title.toLowerCase() === element.getAttribute('data-regione')?.toLowerCase())
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!!locationsInfo]);
 
    useEffect(() => {
        if(!locationsInfo) return;

        const svgPaths = document.querySelectorAll('[data-regione]');
        svgPaths.forEach((element) => element.addEventListener('click', () => regionClickHandler(element), false));

        return () => {
            svgPaths.forEach((element) => element.removeEventListener('click', () => regionClickHandler(element)));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!!locationsInfo, regionClickHandler]);

    return {
        position,
        error: locationsInfoError
    }
}