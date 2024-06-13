import { createBrowserRouter } from "react-router-dom";
import { ABOUT_PAGE, CONTACT_US_PAGE, DASHBOARD_PAGE, ERROR_PAGE, HOME_PAGE, INTERNS_PAGE, LOGIN_PAGE, LOGOUT_PAGE, OUR_TEAM_PAGE, PROJECTS_PAGE, SIGNUP_PAGE, WORKLIFE_PAGE } from "./Routes";
import GuestLayout from "../layouts/GuestLayout";
import UserLayout from "../layouts/UserLayout";
import LogInPage from "../pages/public/LogInPage";
import SignUpPage from "../pages/public/SignUpPage";
import HomePage from "../pages/public/HomePage";
import DashboardPage from "../pages/private/DashboardPage";
import ErrorPage from "../pages/public/ErrorPage";
import OurTeamPage from "../pages/public/OurTeamPage";
import LogOutPage from "../pages/private/LogOutPage";
import AboutPage from "../pages/public/AboutPage";
import WorkLifePage from "../pages/public/WorkLifePage";
import ProjectsPage from "../pages/public/ProjectsPage";
import InternsPage from "../pages/public/InternsPage";
import ContactUsPage from "../pages/public/ContactUsPage";

const Router = createBrowserRouter([
    {
        element: <GuestLayout />,
        children: [
            { path: ERROR_PAGE, element: <ErrorPage /> },
            { path: HOME_PAGE, element: <HomePage /> },
            { path: LOGIN_PAGE, element: <LogInPage /> },
            { path: SIGNUP_PAGE, element: <SignUpPage /> },
            { path: ABOUT_PAGE, element: <AboutPage /> },
            { path: WORKLIFE_PAGE, element: <WorkLifePage /> },
            { path: PROJECTS_PAGE, element: <ProjectsPage /> },
            { path: INTERNS_PAGE, element: <InternsPage /> },
            { path: CONTACT_US_PAGE, element: <ContactUsPage /> },
            { path: OUR_TEAM_PAGE, element: <OurTeamPage /> },
        ]
    },
    {
        element: <UserLayout />,
        children: [
            { path: LOGOUT_PAGE, element: <LogOutPage /> },
            { path: DASHBOARD_PAGE, element: <DashboardPage /> },
        ]
    },
]);

export default Router;