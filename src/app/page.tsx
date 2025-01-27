import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";

interface Twittersidebarbutton {
  title: string; // Title for the sidebar button
  icon: React.ReactNode; // Icon component
}

// Sidebar menu items
const sidemenuItems: Twittersidebarbutton[] = [
  {
    title: "Home",
    icon: <RiHome7Fill />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      {/* Left Section */}
      <div className="col-span-3 flex flex-col justify-start p-8">
        {/* Twitter Icon */}
        <FaTwitter className="text-6xl hover:bg-gray-600 rounded-full p-3 cursor-pointer transition-all mb-8" />
        
        {/* Sidebar Menu */}
        <ul className="space-y-4">
          {sidemenuItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4 text-lg">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section */}
      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-400 h-full"></div>

      {/* Right Section */}
      <div className="col-span-3"></div>
    </div>
  );
}
