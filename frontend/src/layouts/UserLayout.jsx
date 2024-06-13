import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

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
            <Outlet />
        </>
    );
}

export default UserLayout;