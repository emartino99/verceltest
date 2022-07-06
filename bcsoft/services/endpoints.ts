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
    clients: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('clientsPresentation')/items`,
    clientsMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('clientsPresentationMainSettings')/items`,
    courses: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('corsi')/items`,
    coursesMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('corsiMainSettings')/items`,
    news: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('news_list')/items`,
}

export type ENDPOINTS_TYPE = keyof typeof ENDPOINTS;