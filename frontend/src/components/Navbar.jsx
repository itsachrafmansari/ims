import { Link } from "react-router-dom";
import { ABOUT_PAGE, CONTACT_US_PAGE, DASHBOARD_PAGE, HOME_PAGE, INTERNS_PAGE, LOGIN_PAGE, LOGOUT_PAGE, PROJECTS_PAGE, SIGNUP_PAGE, WORKLIFE_PAGE } from "../routes/Routes";
import { useUserContext } from "../contexts/UserContext";
import SchoolLogo from "../assets/1337.svg";
import NavbarUserImage from "./NavbarUserImage";

const Navbar = () => {

    const { authenticated, user } = useUserContext();

    return (
        <nav className="fixed z-10 left-1/2 -translate-x-1/2 px-5 py-4 max-w-screen-lg w-full flex justify-between items-center gap-5 rounded-b-lg text-white bg-black/70">

            <Link to={HOME_PAGE} className="h-8 flex items-center gap-5 uppercase">
                <SchoolLogo className="h-5 fill-white" />
                <div className="w-0.5 h-full bg-white"></div>
                <div className="text-2xl">interns</div>
            </Link>

            <ul className="flex gap-5 font-medium">
                <li><Link to={ABOUT_PAGE} className="hover:text-mainColorOnHover transition-colors duration-default">About</Link></li>
                <li><Link to={WORKLIFE_PAGE} className="hover:text-mainColorOnHover transition-colors duration-default">Work Life</Link></li>
                <li><Link to={PROJECTS_PAGE} className="hover:text-mainColorOnHover transition-colors duration-default">Projects</Link></li>
                <li><Link to={INTERNS_PAGE} className="hover:text-mainColorOnHover transition-colors duration-default">Interns</Link></li>
                <li><Link to={CONTACT_US_PAGE} className="hover:text-mainColorOnHover transition-colors duration-default">Contact Us</Link></li>
            </ul>

            {authenticated && user ? (
                <NavbarUserImage />
            ) : (
                <div className="space-x-5">
                    <Link to={LOGIN_PAGE} className="px-5 py-3 inline-block rounded-lg font-semibold text-gray-900 bg-mainColor hover:bg-mainColorOnHover transition-colors duration-default">Log In</Link>
                    <Link to={SIGNUP_PAGE} className="px-5 py-3 inline-block rounded-lg font-semibold text-gray-900 bg-mainColor hover:bg-mainColorOnHover transition-colors duration-default">Sign Up</Link>
                </div >

            )}


        </nav >
    );
}

export default Navbar;