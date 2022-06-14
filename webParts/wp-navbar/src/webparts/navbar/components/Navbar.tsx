import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { INavbarProps } from './INavbarProps';
import { getMainLinks, getSubLinks } from '../service';
import { IMainLinks, ISubLinks } from '../models';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/Navbar.css';

const Navbar: React.FC<INavbarProps> = (props) => {

  const [mainLinks, setMainLinks] = useState<IMainLinks[]>([]);
  const [subLinks, setSubLinks] = useState<ISubLinks[]>([]);
  const [menuOpened, setMenuOpened] = useState<{ isOpen: boolean, key: number }>({ isOpen: false, key: 0 });

  const { sp } = props;

  const loadMainLinks = async () => {
    const result = await getMainLinks(sp);
    setMainLinks(result);
  };

  const loadSubLinks = async () => {
    const result = await getSubLinks(sp);
    setSubLinks(result);
  };

  const openMenu = (key: number) => {
    if (!menuOpened.isOpen) {
      setMenuOpened({ isOpen: true, key: key });
    } else if (menuOpened.key === key) {
      setMenuOpened({ isOpen: false, key: 0 });
    } else {
      setMenuOpened({ isOpen: true, key: key });
    }
  };

  const navbarHeight = useMemo(() => menuOpened.isOpen ? 175 : 82 ,[menuOpened]);

  const redirectToLink = (url: string) => window.location.href = url;

  useEffect(() => {
    loadMainLinks();
    loadSubLinks();
  }, []);

  return (
    <div className='position-relative' style={{height: navbarHeight, width: '97vw'}}>
      <div className="bg-white navbarContainer">
        <div className='navbar container' style={{maxWidth: '85%'}}>
          <div className='d-flex justify-content-between align-items-center h-100 w-100'>
            <div className="brand d-flex align-items-center">
              <img src={require('../img/logo.svg')}></img>
            </div>

            <div className='navbar-itemList'>
              {mainLinks.length && mainLinks.map((item) => {
              return item.HasSubLinks === "SI"

                  ?
                    <button
                      className={`${menuOpened.key === item.LinkID ? 'navbar-custom-button' : '' }`}
                      onClick={() => openMenu(item.LinkID)} type='button'>{item.Title}
                    </button>
                  :
                    <button
                      onClick={() => redirectToLink(item.LinkURL)} type='button'>{item.Title}
                    </button>;

              })}
            </div>
          </div>
        </div>
        {menuOpened.isOpen ?
          <div className={`subMenu ${menuOpened.isOpen ? "active" : ""}`}>
            <div className='container d-flex justify-content-center align-items-center' style={{height: 90}}>
              <div className='subMenuLinkList d-flex justify-content-around align-items-center row mx-0' style={{width: '100%'}}>
                {subLinks.length && subLinks.filter(filteredItem => filteredItem.SubLinkID === menuOpened.key).map((currentItem) => (
                  <a className={`btn btn-link d-flex align-items-center justify-content-center submenu-link`} href={currentItem.SubLinkURL}>
                    <div className="arrow-1"></div>
                    {currentItem.Title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          : null}
      </div>
    </div>
  );
};

export default Navbar;