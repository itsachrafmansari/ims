import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SIGNUP_PAGE } from "../routes/Routes";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-white bg-gray-950">

            <section className="mx-auto p-20 w-full max-w-screen-2xl flex justify-between items-center">

                <div className="space-y-5">
                    <p className="text-2xl font-bold">Ready to learn and showcase your talent?</p>
                    <p><Link to={SIGNUP_PAGE} className="px-5 py-3 inline-block rounded-lg font-semibold text-gray-900 bg-lime-500">Become an intern</Link></p>
                </div>

                <div className="flex items-center gap-5">
                    <span>Stay updated : </span>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="w-5 h-5" /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} className="w-5 h-5" /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" /></a>
                </div>

            </section>

            <section className="p-10 text-center bg-white/5">
                <p>2018 - {currentYear} @ 1337 is a non-profit.</p>
            </section>

        </footer>
    );
}

export default Footer;