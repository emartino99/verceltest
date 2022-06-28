// import Logo from './img/logo.svg';
// import FooterLogo from './img/footer_logo.svg';
// import CurvedArrow from './img/curvedArrow.svg';
import React, { SVGProps } from 'react';

const Icon = ({ children, ...props }: SVGProps<SVGSVGElement>) => 
    (
        <svg xmlns="http://www.w3.org/2000/svg"  {...props}  >
            {children}
        </svg>
    );

const Linkedin = (props: SVGProps<SVGSVGElement>) => 
    <Icon width="18.834" height="18" viewBox="0 0 18.834 18" {...props} >
        <use href={`#linkedin`}/>
    </Icon>
const FacebookLogo = (props: SVGProps<SVGSVGElement>) => 
    <Icon width="10.758" height="20.708" viewBox="0 0 10.758 20.708" {...props} >
        <use href='#facebook'/>
    </Icon>
const YouTube = (props: SVGProps<SVGSVGElement>) => 
    <Icon width="22.509" height="15.817" viewBox="0 0 22.509 15.817"{...props} >
        <use href='#youtube'/>
    </Icon>

const LocationsMap = (props: SVGProps<SVGSVGElement>) => 
    <Icon width="500" height="550" viewBox="0 0 500 550"{...props}></Icon>

export {
    FacebookLogo,
    Linkedin,
    YouTube,
    LocationsMap
    // Logo,
    // FooterLogo,
    // CurvedArrow
}