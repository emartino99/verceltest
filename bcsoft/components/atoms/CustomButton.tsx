import Link from "next/link";
import { MouseEventHandler } from "react";

interface IButtonProps{
    title: string;
    href?: string;
    mainBackgroundColor?: string;
    mainColor?: string;
    outerShadowColor?: string;
    innerShadowrColor?: string;
    secondaryBackgroundColor?: boolean;
    onClick?: MouseEventHandler;
    type?: 'button' | 'submit' | 'reset';
}

export const CustomButton = ({
    title,
    href,
    mainBackgroundColor = '#001F3C', 
    mainColor = '#FFF', 
    outerShadowColor = '#C9E2FF', 
    innerShadowrColor = '#002950' , 
    secondaryBackgroundColor = false,
    onClick,
    type = 'button'
 }:IButtonProps) => {
    
  return ( 
    <>
       {
            href 
            ?   <Link href={href}>
                    <div className='custom-button-container'>
                        <button 
                            className='custom-main-button pointer'
                            style={{backgroundColor: mainBackgroundColor, color: mainColor}}
                            onClick={onClick}
                            type={type}
                        >
                            {title}
                        </button>
                        <button 
                            className='custom-inner-shadow'
                            style={!secondaryBackgroundColor ? {border: `2px solid ${innerShadowrColor}`} : {backgroundColor: innerShadowrColor}}
                        >
                        </button>
                        <button 
                            className='custom-outer-shadow'
                            style={!secondaryBackgroundColor ? {border: `2px solid ${outerShadowColor}`} : {backgroundColor: outerShadowColor}}
                        >
                        </button>
                    </div>
                </Link> 
        :
            <div className='custom-button-container'>
                <button 
                    className='custom-main-button pointer'
                    style={{backgroundColor: mainBackgroundColor, color: mainColor}}
                    onClick={onClick}
                    type={type}
                >
                    {title}
                </button>
                <button 
                    className='custom-inner-shadow'
                    style={!secondaryBackgroundColor ? {border: `2px solid ${innerShadowrColor}`} : {backgroundColor: innerShadowrColor}}
                >
                </button>
                <button 
                    className='custom-outer-shadow'
                    style={!secondaryBackgroundColor ? {border: `2px solid ${outerShadowColor}`} : {backgroundColor: outerShadowColor}}
                >
                </button>
            </div>
        } 
    </>
  );
};
