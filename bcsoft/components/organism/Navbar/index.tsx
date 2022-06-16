import { useState, useMemo } from "react";
import { Logo } from "../../../assets";
import { useNavLinkHook } from "../../../services";

export function Navbar() {

    const { mainLinks, subLinks, error } = useNavLinkHook();
    // console.log("🚀 ~ file: index.tsx ~ line 10 ~ Navbar ~ mainLinks, subLinks, error", mainLinks, subLinks, error)
    // console.log("🚀 ~ file: index.tsx ~ line 10 ~ Navbar ~ mainLinks, subLinks, error", mainLinks, subLinks, error)
    const [menuOpened, setMenuOpened] = useState<{ isOpen: boolean, key: number }>({ isOpen: false, key: 0 });

    const openMenu = (key: number) => {
        menuOpened.key === key
            ? setMenuOpened({ isOpen: false, key: 0 })
            : setMenuOpened({ isOpen: true, key: key });
    };

    const navbarHeight = useMemo(() => menuOpened.isOpen ? 175 : 82, [menuOpened]);

    const redirectToLink = (url: string) => window.location.href = url;
    // if(!mainLinks || !subLinks) return <div>...loading</div>
    return (
        <header className='header span-auto-12 grid template-col-12' itemScope itemType="https://schema.org/Organization">
            <span className="span-2-3" itemProp='logo' data-src='../../../assets/img/logo.svg' >
                <Logo />
            </span>
            <nav className='span-8-4 text-center'>
                {mainLinks?.map((item) => {
                    return item.HasSubLinks === "SI"
                        ? <button
                            className={`${menuOpened.key === item.LinkID ? 'navbar-custom-button' : ''}`}
                            onClick={() => openMenu(item.LinkID)} type='button'>
                            {item.Title}
                        </button>
                        : <button onClick={() => item?.LinkURL && redirectToLink(item.LinkURL)} type='button'>
                            {item.Title}
                        </button>;

                })}
            </nav>
            {menuOpened.isOpen ?
                <menu className="span-auto-12">
                    <div className={`subMenu ${menuOpened.isOpen ? "active" : ""}`}>
                        <div className='container d-flex justify-content-center align-items-center' style={{ height: 90 }}>
                            {subLinks?.filter(filteredItem => filteredItem.SubLinkID === menuOpened.key).map((currentItem) => (
                                <menuitem key={currentItem.ID} className='subMenuLinkList d-flex justify-content-around align-items-center row mx-0' style={{ width: '100%' }}>
                                    <a className={`btn btn-link d-flex align-items-center justify-content-center submenu-link`} href={currentItem.SubLinkURL}>
                                        <div className="arrow-1"></div>
                                        {currentItem.Title}
                                    </a>
                                </menuitem>
                            ))}
                        </div>
                    </div>
                </menu>
                : null}
        </header>
    )
}
