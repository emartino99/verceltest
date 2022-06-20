import React, { useEffect, useState } from 'react'
interface CardLineProps {
    id: string;
}
const offset = 35;
const innerOffset = 5;

export const CardLine = ({id}: CardLineProps) => {
    const [{width, height}, setDimentions] = useState({width: 0, height: 0});

    useEffect(()=>{
        const createFrame = () => {
            const container = document.getElementById(id);
            if (!container) return;
            setDimentions({
                width: container?.offsetWidth - innerOffset,
                height: container?.offsetHeight - innerOffset
            })
        };
        createFrame();
        window.addEventListener("resize", createFrame, false);
        return () =>{
            window.addEventListener('resize', createFrame)
        }
    },[id])
    return (
        <svg className="cardBorder">
            <line id='top' x1={innerOffset} y1={offset} x2={width} y2={innerOffset} stroke="#001f3c" strokeWidth="2"></line>
            <line id='right' x1={width} y1={innerOffset} x2={width} y2={height - offset} stroke="#001f3c" strokeWidth="2"></line>
            <line id='bottom' x1={innerOffset} y1={height} x2={width} y2={height - offset} stroke="#001f3c" strokeWidth="2"></line>
            <line id='left' x1={innerOffset} y1={offset} x2={innerOffset} y2={height} stroke="#001f3c" strokeWidth="2"></line>
        </svg>
    )
}
