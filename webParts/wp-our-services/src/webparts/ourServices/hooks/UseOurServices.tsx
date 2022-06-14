import { useEffect, useState } from 'react';
import { getFormazioneCards, getSviluppoSoftwareCards } from '../service';
import { ISviluppoSoftwareCards } from '../service/getSviluppoSoftwareCards';
import { IFormazioneCards } from '../service/getFormazioneCards';
import { parseImgJson } from '../utilis';
import { SPRest } from '@pnp/sp/presets/all';

const UseOurServices = (sp: SPRest) => {

    const [sviluppoSoftwareCards, setSviluppoSoftwareCards] = useState<ISviluppoSoftwareCards[]>([]);
    const [formazioneCards, setFormazioneCards] = useState<IFormazioneCards[]>([]);

    const getSviluppoSoftwareCardsHandler = async () => {
        const result = await getSviluppoSoftwareCards(sp);
        const resultWithUsableImgs = parseImgJson(result);
        setSviluppoSoftwareCards(resultWithUsableImgs);
    };

    const getFormazioneCardsHandler = async () => {
        const result = await getFormazioneCards(sp);
        setFormazioneCards(result);
    };
    
    useEffect(() => {
        getSviluppoSoftwareCardsHandler();
        getFormazioneCardsHandler();
    }, []);

    return {
        sviluppoSoftwareCards,
        formazioneCards
    };


};

export default UseOurServices;