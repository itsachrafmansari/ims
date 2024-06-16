import { Link } from "react-router-dom";
import { HOME_PAGE, LOGIN_PAGE } from "../../routes/Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const SignUpPage = () => {

    const { signUp } = useUserContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const signUpHandler = (e) => {
        e.preventDefault();

        signUp(firstName, lastName, email, password);

    }

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
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your first name in English" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your last name in English" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password-confirmation">Password Confirmation</label>
                        <input type="password" name="password-confirmation" id="password-confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Retype Your Password" className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                    </div>

                    <button type="submit" onClick={signUpHandler} className="px-3 py-2 w-full rounded-lg text-white bg-mainColor hover:bg-mainColorOnHover transition-colors duration-default">Sign Up</button>

                    <p>Already have an account ? <Link to={LOGIN_PAGE} className="text-mainColor hover:text-mainColorOnHover transition-colors duration-default">Log In</Link></p>

                </form>
            </div>

            <div>
                <img src="https://admission.1337.ma/_next/image?url=%2F3ayel.webp&w=3840&q=75" alt="LogIn Page Image" className="h-full w-full object-cover" />
            </div>

        </div>);
}

export default SignUpPage;