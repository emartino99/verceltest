export const ENDPOINTS = {
    submenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarSubMenuLinks')/items`,
    mainmenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarMainLinks')/items`,
    footer: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('footerLinks')/items`,
    herolinks: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('heroQuickLinks')/items`,
    hero: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('hero')/items`,
    business: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('CoreBusiness')/items`,
    businessCard: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('coreBusinessCards')/items`,
    locations: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftLocations')/items`,
    partners: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('partners')/items`,
}

export type ENDPOINTS_TYPE = keyof typeof ENDPOINTS;