import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import { FaRegBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Inter } from "next/font/google";
import FeedCard from "../../components/feedcards";
interface Twittersidebarbutton {
  title: string; 
  icon: React.ReactNode; 
}

// Sidebar menu items 
const sidemenuItems: Twittersidebarbutton[] = [
  {
    title: "Home",
    icon: <RiHome7Fill />,
  },
  {
    title:"Explore",
    icon:<BiHash />

  },
  {
    title:"notifications",
    icon:<BsBell />

  },
  {
    title:"Messages",
    icon:<SlEnvolope />
  },
  {
    title:"Bookmarks",
    icon:<FaRegBookmark />
  },
  {
  title:"Profile",
  icon:<FaUser />
  }
];

export default function Home() {
  return (
    
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
      {/* Left Section */}
      <div className="col-span-3 flex flex-col justify-start p-7 p gap-1">
        {/* Twitter Icon */}
        <FaTwitter className="text-6xl hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all mb-8" />
        
        {/* Sidebar Menu */} 
        <ul className="space-y-">
          {sidemenuItems.map((item, index) => (
            <li  
            key={index} className="flex items-center gap-2 text-lg hover:bg-gray-800 rounded-full px-4 py-1 cursor-pointer ">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li> 
          ))}
        </ul>
         <button className="bg-[#1d9bf0] font-bold text-sm  p-3 rounded-full w-full mt-4  "  >Tweet </button>
      </div>

      {/* Middle Section */}
      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-400 h-full">
        <FeedCard /> 

      </div>

      {/* Right Section */}
      <div className="col-span-3"></div>
  
    </div>  );
}
