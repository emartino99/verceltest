import React from 'react'
import { useRouter } from 'next/router';
import { IResults, ISharepointStyle } from '../../../models';
import { extractData, extractMultipleData } from '../../../utils';

interface ResultsProps {
    results: IResults[];
    resultsMainSettings: IResults[];
}

export const Results = ({results, resultsMainSettings}: ResultsProps) => {

    const route = useRouter();
    const resultExtractData: IResults[] = extractMultipleData(route, results);
    const resultMainSettingsExtractData: IResults = extractData(route, resultsMainSettings);

    const {
        Title,
        description,
        style
    } = resultMainSettingsExtractData || {};

    const { 
        titleStyle,
        descriptionStyle,
        backgroundColor
    }: ISharepointStyle = style && JSON.parse(style);


    return (
        <section className='results span-1-12' style={{backgroundColor: backgroundColor ?? '#FFFFFF'}}>
            <header>
                <h1 style={{...titleStyle}}>{Title}</h1>
                <p style={{...descriptionStyle}}>{description}</p>
            </header>
            <div className='results-content'>
                {
                    resultExtractData?.map(card => {

                        const {
                            titleStyle, 
                            descriptionStyle, 
                            border,
                            leftBorder, 
                            rightBorder
                        }: ISharepointStyle = card.style && JSON.parse(card.style);

                        return (
                            <div key={card.ID} className='results-card-container'>
                                <div className="results-card" style={{...border, borderTop: `5px solid ${titleStyle?.color}`}}>
                                    <div className="results-card-left-border" style={{...leftBorder}}></div>
                                    <div className="results-card-right-border" style={{...rightBorder}}></div>
                                    <h1 style={{...titleStyle}}>{card.Title}</h1>
                                </div>
                                <span style={{...descriptionStyle}}>{card.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};
