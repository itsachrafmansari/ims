import { useUserContext } from "../../contexts/UserContext";

const LogOutPage = () => {

    const { logOut, setUser, setAuthenticated } = useUserContext();

    const logOutHandler = () => {
        logOut();
        setUser({});
        setAuthenticated(false);
    }

    return (
        <div className="grow flex justify-center items-center bg-gray-100">

            <div className="p-5 rounded-lg space-y-5 text-center bg-white">
                <p>Are you sure you want to log out ?</p>
                <button onClick={logOutHandler} className="px-3 py-2 rounded-lg text-white bg-mainColor hover:bg-mainColorOnHover transition-color duration-default">Log Out</button>
            </div>

        </div>
    );
}

export default LogOutPage;