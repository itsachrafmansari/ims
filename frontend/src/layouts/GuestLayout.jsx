import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GuestLayout = () => {

    return (
        <>
            <Navbar />

            <main className="grow">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default GuestLayout;