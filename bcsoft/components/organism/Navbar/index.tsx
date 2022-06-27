import { useState, useTransition } from "react";
import { Logo } from "../../../assets";
import { useNavLinkHook } from "../../../services";

export function Navbar() {

    const { mainLinks, subLinks, error } = useNavLinkHook();
    const [isPending, startTransition] = useTransition();

    const [menuOpened, setMenuOpened] = useState<{ isOpen: boolean, key: number }>({ isOpen: false, key: 0 });

    const openMenu = (key: number) => {
        startTransition(() => {
            menuOpened.key === key
                ? setMenuOpened({ isOpen: false, key: 0 })
                : setMenuOpened({ isOpen: true, key: key });
        })

    };

    const redirectToLink = (url: string) => window.location.href = url;

    return (
        <header className='header span-auto-12 grid template-col-12' itemScope itemType="https://schema.org/Organization">
            <span className="span-2-3" itemProp='logo' data-src='../../../assets/img/logo.svg' >
                <Logo />
            </span>
            <nav className='span-8-4 navbar'>
                {mainLinks?.map((item) => {
                    return item.HasSubLinks === "SI"
                        ? <button
                            key={item.LinkID}
                            className={`navbar-custom-button ${menuOpened.key === item.LinkID ? 'active' : ''}`}
                            onClick={() => openMenu(item.LinkID)} type='button'>
                            {item.Title}
                        </button>
                        : <button key={item.LinkID} onClick={() => item?.LinkURL && redirectToLink(item.LinkURL)} type='button'>
                            {item.Title}
                        </button>;

                })}
            </nav>
            <ul className={`submenu span-1-12 ${isPending || menuOpened.isOpen ? 'open' : ''}`}  >
                {subLinks
                    ?.filter(filteredItem => filteredItem.SubLinkID === menuOpened.key)
                    ?.map((currentItem) => (
                        <li key={currentItem.ID} className='submenu-items' >
                            <a className={`submenu-items-links`} href={currentItem.SubLinkURL}>
                                <span className="arrow-1"></span>
                                {currentItem.Title}
                            </a>
                        </li>
                    ))}
            </ul>
        </header>
    )
}
