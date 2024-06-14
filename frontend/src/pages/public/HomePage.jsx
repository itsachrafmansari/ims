import Header from "../../components/Header";
import GuestStaticPageLayout from "../../layouts/GuestStaticPageLayout";

const HomePage = () => {
    return (
        <GuestStaticPageLayout title="In talent we believe, In hard work we trust" backgroundSource="https://1337.ma/static/d17b49fd0df2741479d1f3679660a704/d8255/banner.jpg">

            <section className="px-10">
                <div className="mx-auto w-full max-w-screen-xl bg-slate-800">
                    <h1>Title</h1>
                </div>
            </section>

        </GuestStaticPageLayout >
    );
}

export default HomePage;