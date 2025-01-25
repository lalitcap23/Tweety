import { FaTwitter } from "react-icons/fa"; 

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      {/* Left Section */}
      <div className="col-span-3 flex  justify-start p-7">
        <FaTwitter className="text-5xl hover:bg-gray-600 rounded-full p-3 cursor-pointer transition-all " />
      </div>

      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-white-400 h-full"></div>

      <div className="col-span-3"></div>
    </div>
  );
}

