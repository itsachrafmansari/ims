import Header from "../components/Header";

const GuestStaticPageLayout = ({ title, headerBackgroundSource, children }) => {
    return (
        <>
            <Header title={title} backgroundSource={headerBackgroundSource} />

            {children}
        </>
    );
}

export default GuestStaticPageLayout;