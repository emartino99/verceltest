export const ENDPOINTS = {
    submenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarSubMenuLinks')/items`,
    mainmenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarMainLinks')/items`,
    footer: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('footerLinks')/items`,
}