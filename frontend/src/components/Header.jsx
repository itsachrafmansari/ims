import Separator from "../assets/separator.svg";
import triangleXO from "../assets/triangleXO.svg";

const Header = ({ title, backgroundSource }) => {
    return (
        <header className="relative h-screen overflow-hidden flex flex-col justify-center items-center">

            <div className="z-[2] flex flex-col justify-center gap-3" >
                <h1 className="text-white font-bold text-3xl">{title}</h1>
                <img src={triangleXO} className="h-3" />
            </div>

            <div className="absolute z-[0] w-full h-full backdrop-filter backdrop-blur-sm backdrop-brightness-[0.35]"></div>

            <div className="absolute z-[-1] top-0 left-0 h-full w-full bg-gray-500/50">

                {backgroundSource && <img src={backgroundSource} alt="Header Background Image" className="w-full h-full object-cover" />}

            </div>

            <img src={Separator} alt="Section seperator" className="absolute bottom-0" />

        </header>
    );
}

export default Header;