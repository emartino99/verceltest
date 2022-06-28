import './img/curvedArrow.svg';
import './img/linkedin.svg'
import './img/facebook.svg'
import './img/youtube.svg'
import './img/logo.svg';
import './img/footer_logo.svg';

import React, { SVGProps } from 'react';

type SVGIcon = SVGProps<SVGSVGElement> & {selector: string }
 
const Icon = ({ selector, ...props }: SVGIcon) => 
    (
        <svg {...props}  >
            <use href={`#${selector}`} />
        </svg>
    );

const Linkedin = (props: SVGProps<SVGSVGElement>) => 
    <Icon width={18} height={18} {...props} selector='linkedin' />;
const FacebookLogo = (props: SVGProps<SVGSVGElement>) => 
    <Icon width={10} height={23} {...props} selector='facebook' />;
const YouTube = (props: SVGProps<SVGSVGElement>) => 
    <Icon width={22} height={15} {...props} selector='youtube' />;
const Logo = (props: SVGProps<SVGSVGElement>) => 
    <Icon {...props} selector='logo' />;
const FooterLogo = (props: SVGProps<SVGSVGElement>) => 
    <Icon {...props} selector='footer_logo' />;
const CurvedArrow = (props: SVGProps<SVGSVGElement>) => 
    <Icon {...props} selector='curvedArrow' />;

export {
    FacebookLogo,
    Linkedin,
    YouTube,
    // Logo,
    // FooterLogo,
    // CurvedArrow
    Logo,
    FooterLogo,
    CurvedArrow
}