import { useRouter } from "next/router";
import { IBanner } from "../../../models";

interface BannerProps {
    bannerInfos: IBanner[] | undefined;
}

export function Banner({bannerInfos}: BannerProps) {

    const router = useRouter();

    const {
        Title,
        LinkLabel,
        LinkURL
    } = bannerInfos?.[0] || {};

    const urlHandler = (url: string) => router.push(url);

    return (
        <section
            className='banner span-1-12'
        >
            <span className='banner-text'>{Title}</span>
            {
                LinkURL
                && LinkLabel
                && <span
                    className='banner-link-text pointer'
                    onClick={() => urlHandler(LinkURL)}>
                    {`>> ${LinkLabel} <<`}
                </span>
            }
        </section>

    );
};

export default Banner;