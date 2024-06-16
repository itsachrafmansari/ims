import NavbarUser from "../../components/NavbarUser";
import { useUserContext } from "../../contexts/UserContext";
import InternDashboardPage from "./intern/InternDashboardPage";
import StaffDashboardPage from "./staff/StaffDashboardPage";
import SupervisorDashboardPage from "./supervisor/SupervisorDashboardPage";

const DashboardPage = () => {

    const { user } = useUserContext();

    let dashboardPage;
    switch (user.role) {
        case "intern":
            dashboardPage = <InternDashboardPage />
            break;

        case "staff":
            dashboardPage = <StaffDashboardPage />
            break;

        case "supervisor":
            dashboardPage = <SupervisorDashboardPage />
            break;

        default:
            break;
    }

    return (
        <>
            <NavbarUser />
            {dashboardPage}
        </>
    );
}

export default DashboardPage;