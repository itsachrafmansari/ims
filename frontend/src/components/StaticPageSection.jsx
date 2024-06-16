const StaticPageSection = ({ title, children }) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

export default StaticPageSection;