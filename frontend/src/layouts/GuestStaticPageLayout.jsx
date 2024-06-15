import Header from "../components/Header";
import Navbar from "../components/Navbar";

const GuestStaticPageLayout = ({ title, headerBackgroundSource, children }) => {
    return (
        <>
            <Navbar />
            <Header title={title} backgroundSource={headerBackgroundSource} />
            <div className="mx-auto w-full max-w-screen-xl">
                {children}
            </div>
        </>
    );
}

export default GuestStaticPageLayout;