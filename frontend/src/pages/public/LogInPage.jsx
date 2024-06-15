import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { DASHBOARD_PAGE, HOME_PAGE, PASSWORD_RESET_PAGE, SIGNUP_PAGE } from "../../routes/Routes";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const LogInPage = () => {

    const { logIn, setUser, authenticated, setAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInHandler = async (e) => {
        e.preventDefault();
        const response = await logIn(email, password);
    }

    useEffect(() => {
        if (authenticated) {
            navigate(DASHBOARD_PAGE);
        }
    }, [authenticated]);

    return (
        <div className="h-screen grid grid-cols-2 bg-gray-100">

            <div className="p-5 flex justify-center items-center rounded-lg shadow bg-white">
                <form action="post" className="w-full max-w-lg space-y-5">

                    <p>
                        <Link to={HOME_PAGE} className="text-slate-500 space-x-2">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            <span>Home page</span>
                        </Link>
                    </p>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <button type="submit" onClick={logInHandler} className="px-3 py-2 w-full rounded-lg text-white bg-mainColor hover:bg-mainColorOnHover transition-colors duration-default">Log In</button>

                    <p>Don't have an account yet ? <Link to={SIGNUP_PAGE} className="text-mainColor hover:text-mainColorOnHover transition-colors duration-default">Sign Up</Link></p>
                    <p><Link to={PASSWORD_RESET_PAGE} className="underline text-slate-500">Forgot your password ?</Link></p>

                </form>
            </div>

            <div>
                <img src="https://admission.1337.ma/_next/image?url=%2F3ayel.webp&w=3840&q=75" alt="LogIn Page Image" className="h-full w-full object-cover" />
            </div>

        </div>
    );
}

export default LogInPage;