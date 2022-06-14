import * as React from 'react';
import './style/BcButton.css';

interface Props {
    label: string;
    enableLink: boolean;
    function?(): any;
    href?: string;
    buttonClass?: string;
}

export const BcButton: React.FC<Props> = (props) => {

    const [active, SetActive] = React.useState<boolean>(false);

    return (
        <div className={`bcButton-container ${active ? "active" : ""}`} onMouseEnter={() => SetActive(true)} onMouseLeave={() => SetActive(false)}>
            <div className='bcButton-shadow top'></div>
            <div className='bcButton-shadow bottom'></div>
            {props.enableLink ?
                <a href={props.href ?? ""} className={`btn bcButton ${props.buttonClass ?? ""}`}>
                    {props.label}
                </a>
                : <button type='button' onClick={props.function != undefined ? () => props.function() : null} className={`btn bcButton ${props.buttonClass ?? ""}`}>
                    {props.label}
                </button>
            }
        </div>
    );
};