

export function Banner() {

    const {
        backgroundColor,
        adsBannerText,
        adsBannerTextWeight,
        adsBannerTextColor,
        adsBannerLinkText,
        adsBannerLinkTextWeight,
        adsBannerLinkTextColor,
        adsBannerLinkUrl
    } = {
        backgroundColor: 'yellow',
        adsBannerText: 'todo',
        adsBannerTextWeight: 'normal',
        adsBannerTextColor: 'black',
        adsBannerLinkText: 'todo',
        adsBannerLinkTextWeight: 'bold',
        adsBannerLinkTextColor: 'blue',
        adsBannerLinkUrl: 'light-blue'
    };

    const urlHandler = (url: string) => window.open(url, '_blank');

    return (
        <section
            className='banner span-1-12'
        >
            <span className={`banner-text ${adsBannerTextWeight}`} style={{ color: adsBannerTextColor }}>{adsBannerText}</span>
            {
                adsBannerLinkUrl
                && adsBannerLinkText
                && <span
                    className={`banner-link-text ${adsBannerLinkTextWeight}`}
                    style={{ color: adsBannerLinkTextColor, }}
                    onClick={() => urlHandler(adsBannerLinkUrl)}>
                    {`>> ${adsBannerLinkText} <<`}
                </span>
            }
        </section>

    );
};

export default Banner;