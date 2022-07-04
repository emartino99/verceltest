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
            className='custom-main-button'
            style={{backgroundColor: mainBackgroundColor, color: mainColor}}
            onClick={() => buttonRedirect(href)}
        >
            {title}
        </button>
        <button 
            className='custom-inner-shadow'
            style={{border: `2px solid ${innerShadowrColor}`, backgroundColor: secondaryBackgroundColor ? innerShadowrColor : 'none'}}
        >
        </button>
        <button 
            className='custom-outer-shadow'
            style={{border: `2px solid ${outerShadowColor}`, backgroundColor: secondaryBackgroundColor ? outerShadowColor : 'none'}}
        >
        </button>
    </div>
  );
};
