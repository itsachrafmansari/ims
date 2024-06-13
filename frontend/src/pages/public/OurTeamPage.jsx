import TeamMember from "../../components/TeamMember";

const OurTeamPage = () => {

    let members = [
        { full_name: "Achraf Mansari", subtitle: "the one who suck ", image_src: "https://thispersondoesnotexist.com/", url: "/achraf" },
        { full_name: "Nawfal Taouqi", subtitle: "the better one ", image_src: "https://thispersondoesnotexist.com/", url: "/nawfal" },
        //     {full_name: "Full Name 3", subtitle: "Subtitle", image_src: "src", url: "#"},
        //     {full_name: "Full Name 4", subtitle: "Subtitle", image_src: "src", url: "#"},
        //     {full_name: "Full Name 5", subtitle: "Subtitle", image_src: "src", url: "#"},
    ]

    return (
        <div className="OurTeam-page bg-zinc-100 min-h-screen" >

            <section className="hero-content-section ">
                <div className="bg-white py-20 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-center mb-8">Our Team</h1>
                    <p className="text-xl text-teal-400 text-center">Home / Our Team</p>
                </div>
            </section>

            <section>
                <div className="px-20 py-20 grid grid-cols-3 gap-8 flex justify-items-stretch ">
                    {
                        Object.keys(members).map((key, i) => (
                            <TeamMember full_name={members[key]["full_name"]} subtitle={members[key]["subtitle"]} image_src={members[key]["image_src"]} url={members[key]["url"]} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default OurTeamPage;