import Link from "next/link";
import { getLayout } from "../components/template";

const FourOhFourPage = () => {
    return (
        <div style={{ display: 'flex', width: '100%', height: '50vh' }}>

            <div style={{ position: 'relative', margin: 'auto' }} >
                <span>
                    sorry, page to be developed.
                    try later.
                </span>
                <Link href={"/"} >
                    <a>back home</a>
                </Link>
            </div>
        </div>
    )
}

export default FourOhFourPage;

FourOhFourPage.getLayout = getLayout