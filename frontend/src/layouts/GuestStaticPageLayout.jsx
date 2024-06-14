import Header from "../components/Header";
import Navbar from "../components/Navbar";

const GuestStaticPageLayout = ({ title, headerBackgroundSource, children }) => {
    return (
        <>
            <Navbar />

            <Header title={title} backgroundSource={headerBackgroundSource} />

            {children}
        </>
    );
}

export default GuestStaticPageLayout;