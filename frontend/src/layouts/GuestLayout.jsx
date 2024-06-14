import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const GuestLayout = () => {

    return (
        <>
            <main className="grow relative">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default GuestLayout;