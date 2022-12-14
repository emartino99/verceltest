import { useState } from "react";
import { Logo } from "../../../assets";
import { IMainLinks, ISubLinks } from "../../../models";
import { useNavLinkHook } from "../../../services";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavbarProps{
    mainLinks?: IMainLinks[] | undefined,
    subLinks?: ISubLinks[] | undefined,
    skip?: boolean;
}
export function Navbar(props: NavbarProps) {

    const { mainLinks: links, subLinks: sub, error } = useNavLinkHook(props.skip);
    const mainLinks = props?.mainLinks || links;
    const subLinks = props?.subLinks || sub;

    const [selected, setSelected] = useState<ISubLinks[]>();

    const router = useRouter();
    const buttonRedirect = () => router.push('/');

    const openMenu = (key: number) => {
        setSelected(
            selected =>
                selected?.[0]?.SubLinkID === key
                    ? undefined
                    : subLinks?.filter(filteredItem => filteredItem.SubLinkID === key)
        )
    };

    const redirectToLink = (url: string) => window.location.href = url;

    return (
        <header className='header span-auto-12 grid template-col-12' itemScope itemType="https://schema.org/Organization">
            <span className="span-2-3" itemProp='logo' data-src='../../../assets/img/logo.svg' >
                <Logo className='pointer' width={240} height={90} onClick={buttonRedirect} />
            </span>
            <nav className='span-8-4 navbar'>
                {mainLinks?.map((item) => {
                    return item.HasSubLinks === "SI"
                        ? <button
                            key={item.LinkID}
                            className={`navbar-custom-button pointer ${selected?.[0]?.SubLinkID === item.LinkID ? 'active' : ''}`}
                            onClick={() => openMenu(item.LinkID)} type='button'>
                            {item.Title}
                        </button>
                        : <button className="pointer" key={item.LinkID} onClick={() => item?.LinkURL && redirectToLink(item.LinkURL)} type='button'>
                            {item.Title}
                        </button>;

                })}
            </nav>
            <ul className={`submenu span-1-12 ${selected?.length ? 'open' : ''}`}  >
                {selected?.map(
                    currentItem =>
                        <Link key={currentItem.ID} href={currentItem.SubLinkURL} className='submenu-items'>
                            <a className={`submenu-items-links`}>
                                <span className="arrow-1"></span>
                                {currentItem.Title}
                            </a>
                        </Link> 
                )}
            </ul>
        </header >
    )
}
