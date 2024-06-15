import { Outlet } from "react-router-dom";
import FooterGuest from "../components/FooterGuest";

const GuestLayout = () => {

    return (
        <>
            <main className="grow">
                <Outlet />
            </main>
            <FooterGuest />
        </>
    );
}

export default GuestLayout;