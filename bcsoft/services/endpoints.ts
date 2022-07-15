export const ENDPOINTS = {
    banner: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('banner')/items`,
    buildYourFuture: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('buildYourFuture')/items`,
    business: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('CoreBusiness')/items`,
    businessCard: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('coreBusinessCards')/items`,
    certificationsISO27001: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('certificationsISO27001')/items`,
    certificationsISO9001: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('certificationsISO9001')/items`,
    certificationsMicrosoft: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('certificationsMicrosoft&Sap')/items`,
    clients: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('clientsPresentation')/items`,
    clientsMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('clientsPresentationMainSettings')/items`,
    courses: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('corsi')/items`,
    coursesMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('corsiMainSettings')/items`,
    customHeroAbout: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('customHeroAbout')/items`,
    customHeroCertifications: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('customHeroCertifications')/items`,
    customHeroContacts: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('customHeroContacts')/items`,
    footer: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('footerLinks')/items`,
    hero: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('hero')/items`,
    herolinks: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('heroQuickLinks')/items`,
    history: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftHistory')/items`,
    historyMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftHistoryMainSettings')/items`,
    infoBannerAbout: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('infoBannerAbout')/items`,
    infoBannerContacts: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('infoBannerContacts')/items`,
    locations: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftLocations')/items`,
    locationsContactsMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftLocationsContactsMainSettings')/items`,
    locationsMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftLocationsMainSettings')/items`,
    mainmenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarMainLinks')/items`,
    news: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('news_list')/items`,
    numbers: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftNumbersAbout')/items`,
    numbersMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('bcSoftNumbersAboutMainSettings')/items`,
    partners: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('partners')/items`,
    quoteAbout: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('quoteAbout')/items`,
    quoteCertifications: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('quoteCertifications')/items`,
    servicesContacts: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('servicesContacts')/items`,
    servicesContactsMainSettings: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('servicesContactsMainSettings')/items`,
    strengths: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('strengths')/items`,
    strengthsSecondContainer: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('strengthsSecondContainer')/items`,
    strengthsThirdContainer: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('strengthsThirdContainer')/items`,
    submenu: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('navbarSubMenuLinks')/items`,
    vision: `${process.env.NEXT_PUBLIC_BASE_URL}/getByTitle('vision')/items`,

}

export type ENDPOINTS_TYPE = keyof typeof ENDPOINTS;