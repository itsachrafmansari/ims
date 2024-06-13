import { Link } from "react-router-dom";
import SchoolLogo from "../assets/1337.svg";
import { ABOUT_PAGE, CONTACT_US_PAGE, HOME_PAGE, INTERNS_PAGE, LOGIN_PAGE, PROJECTS_PAGE, SIGNUP_PAGE, WORKLIFE_PAGE } from "../routes/Routes";

const Navbar = () => {
    return (
        <nav className="fixed z-10 left-1/2 -translate-x-1/2 px-5 py-4 max-w-screen-lg w-full flex justify-between items-center gap-5 rounded-b-lg text-white bg-black/80">

            <Link to={HOME_PAGE} className="h-8 flex items-center gap-5 uppercase">
                <img src={SchoolLogo} alt="1337 Logo" className="h-5" />
                <div className="w-0.5 h-full bg-white"></div>
                <div className="text-2xl">interns</div>
            </Link>

            <ul className="flex gap-5">
                <li><Link to={ABOUT_PAGE}>About</Link></li>
                <li><Link to={WORKLIFE_PAGE}>Work Life</Link></li>
                <li><Link to={PROJECTS_PAGE}>Projects</Link></li>
                <li><Link to={INTERNS_PAGE}>Interns</Link></li>
                <li><Link to={CONTACT_US_PAGE}>Contact Us</Link></li>
            </ul>

            <div className="space-x-5">
                <Link to={LOGIN_PAGE} className="px-5 py-3 inline-block rounded-lg font-semibold text-gray-900 bg-lime-500">Log In</Link>
                <Link to={SIGNUP_PAGE} className="px-5 py-3 inline-block rounded-lg font-semibold text-gray-900 bg-lime-500">Sign Up</Link>
            </div>

        </nav>
    );
}

export default Navbar;