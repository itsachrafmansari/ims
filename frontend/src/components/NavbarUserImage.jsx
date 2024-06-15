import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { DASHBOARD_PAGE } from "../routes/Routes";

const NavbarUserImage = () => {

    const { user, setUser, setAuthenticated, logOut } = useUserContext();
    
    const logOutHandler = () => {
        logOut();
        setUser({});
        setAuthenticated(false);
    }

    return (
        <div className="relative">

            <div className="h-8 w-8 aspect-square rounded-full border border-white overflow-hidden">
                <img src={user.portrait_image_url} alt="User Portrait Image" className="w-full h-full object-cover" />
            </div>

            <ul className="absolute top-full left-1/2 -translate-x-1/2 px-3 py-2 space-y-2 rounded-lg shadow text-black bg-white">
                <li><Link to={DASHBOARD_PAGE}>Dashboard</Link></li>
                <li><button onClick={logOutHandler}>Log Out</button></li>
            </ul>
        </div>
    );
}

export default NavbarUserImage;