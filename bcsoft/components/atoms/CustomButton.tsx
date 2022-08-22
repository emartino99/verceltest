import { useRouter } from "next/router";

interface IButtonProps{
    title: string | undefined;
    href: string | undefined;
    mainBackgroundColor?: string;
    mainColor?: string;
    outerShadowColor?: string;
    innerShadowrColor?: string;
    secondaryBackgroundColor?: boolean;
}

export const CustomButton = ({
    title, 
    href, 
    mainBackgroundColor = '#001F3C', 
    mainColor = '#FFF', 
    outerShadowColor = '#C9E2FF', 
    innerShadowrColor = '#002950' , 
    secondaryBackgroundColor = false
 }:IButtonProps) => {

  const router = useRouter();
  const buttonRedirect = (url: any) => href && router.push(url);
    
  return ( 
    <div className='custom-button-container'>
        <button 
            className='custom-main-button pointer'
            style={{backgroundColor: mainBackgroundColor, color: mainColor}}
            onClick={() => buttonRedirect(href)}
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
  );
};
