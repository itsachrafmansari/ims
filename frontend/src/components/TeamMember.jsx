import { Link } from "react-router-dom";

const TeamMember = ({ full_name, subtitle, image_src, url }) => {
    return (
      <div className="container mx-auto group">
        <div className="relative">
          <img src={image_src} alt={full_name} className="rounded-full w-32 h-32 object-cover group-hover:opacity-50 transition-opacity duration-300 " />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white shadow-lg p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{full_name}</h2>
            <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
            {/* <a href={url} className="text-teal-500 font-semibold hover:text-teal-700">Contact</a> */}
            <Link to={url} className="text-teal-500 font-semibold hover:text-teal-700">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default TeamMember;