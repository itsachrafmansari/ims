import { HOME_PAGE } from "../routes/Routes";
import { Link } from "react-router-dom";
import SchoolLogo from "../assets/1337.svg";
import { useUserContext } from "../contexts/UserContext";
import NavbarUserImage from "./NavbarUserImage";


const NavbarUser = () => {

    const { user } = useUserContext();

    return (
        <nav className="px-5 py-4 mx-auto max-w-screen-lg w-full flex justify-between items-center gap-5">

            <Link to={HOME_PAGE} className="h-8 flex items-center gap-5 uppercase">
                <SchoolLogo className="h-5 fill-black" />
                <div className="w-0.5 h-full bg-black"></div>
                <div className="text-2xl">interns</div>
            </Link>

            <div className="flex items-center gap-2">
                {`${user.firstName} ${user.lastName}`}
                <NavbarUserImage />
            </div>

        </nav>
    );
}

export default NavbarUser;