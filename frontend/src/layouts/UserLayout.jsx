import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { LOGIN_PAGE } from "../routes/Routes";
import FooterUser from "../components/FooterUser";

const UserLayout = () => {

    const { authenticated } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authenticated) {
            navigate(LOGIN_PAGE);
        }
    }, [authenticated]);

    return (
        <>
            <main className="grow flex flex-col justify-start">
                <Outlet />
            </main>
            <FooterUser />
        </>
    );
}

export default UserLayout;