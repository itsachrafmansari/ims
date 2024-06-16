import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { DASHBOARD_PAGE } from "../routes/Routes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavbarUserImage = () => {

    const { user, setUser, setAuthenticated, logOut } = useUserContext();
    const [displayDropMenu, setDisplayDropMenu] = useState(false);

    const toggleDropMenu = () => {
        setDisplayDropMenu(!displayDropMenu);
    };

    const logOutHandler = () => {
        logOut();
        setUser({});
        setAuthenticated(false);
    }

    return (
        <div onClick={toggleDropMenu} className="flex items-center gap-2 cursor-pointer">

            <div className={`trnasition duration-default ${displayDropMenu && "-rotate-90"}`}><FontAwesomeIcon icon={faAngleDown} /></div>

            <div className="relative">
                <div className="h-8 w-8 aspect-square rounded-full border border-white overflow-hidden">
                    <img src={user.portrait_image_url} alt="User Portrait Image" className="w-full h-full object-cover" />
                </div>

                {displayDropMenu && (
                    <div className="absolute top-full right-0 pt-5">

                        <div className="relative">
                            <div class="absolute top-0 -translate-y-full right-2.5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                            <div className="rounded-lg shadow-lg text-slate-900 bg-white" onMouseLeave={() => setIsOpen(false)}>
                                <Link to={DASHBOARD_PAGE} className="px-4 py-2 block rounded-t-lg hover:bg-gray-100">Dashboard</Link>
                                <button onClick={logOutHandler} className="px-4 py-2 w-full rounded-b-lg hover:bg-gray-100">LogOut</button>
                            </div>

                        </div>

                    </div>
                )}
            </div>

        </div>
    );
}

export default NavbarUserImage;