import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { schoolFacebookURL, schoolInstagramURL, schoolLinkedInURL, schoolXURL, schoolYoutubeURL } from "../routes/Routes";

const FooterUser = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-5 w-full flex justify-between text-white bg-gray-950">

            <p>2018 - {currentYear} @ 1337 is a non-profit.</p>

            <div className="flex items-center gap-5">
                <span>Stay updated : </span>
                <a href={schoolFacebookURL}><FontAwesomeIcon icon={faFacebook} className="w-5 h-5 hover:text-mainColorOnHover transition-colors duration-default" /></a>
                <a href={schoolXURL}><FontAwesomeIcon icon={faTwitter} className="w-5 h-5 hover:text-mainColorOnHover transition-colors duration-default" /></a>
                <a href={schoolInstagramURL}><FontAwesomeIcon icon={faInstagram} className="w-5 h-5 hover:text-mainColorOnHover transition-colors duration-default" /></a>
                <a href={schoolYoutubeURL}><FontAwesomeIcon icon={faYoutube} className="w-5 h-5 hover:text-mainColorOnHover transition-colors duration-default" /></a>
                <a href={schoolLinkedInURL}><FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 hover:text-mainColorOnHover transition-colors duration-default" /></a>
            </div>

        </footer>
    );
}

export default FooterUser;