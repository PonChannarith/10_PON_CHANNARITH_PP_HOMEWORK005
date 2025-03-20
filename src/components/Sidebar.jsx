// import { Link } from "lucide-react";
import Link  from "next/link";
import {
  FaHome,
  FaBook,
  FaFilm,
  FaTv,
  FaMusic,
  FaCameraRetro,
  FaDumbbell,
  FaMobileAlt,
  FaGlobe,
  FaFeatherAlt,
  FaCogs,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex">
      <aside className="flex flex-col h-full shadow-md text-black w-80 fixed">
        <div className="flex border-gray-300 items-center mt-5 mx-auto">
          <img
            src="/Static.jpg"
            alt="User Profile"
            className="rounded-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-[#0B3954] text-xl font-bold">Channarith</h2>
          <p className="text-[#087E8B] text-lg font-medium">
            channarith168@gmail.com
          </p>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-4 text-[20px] space-y-2">
            {[
              { icon: <FaHome />, label: "Home",link:"/" },
              
              { icon: <FaBook />, label: "Book Categories",link:"/book-categories" },
              { icon: <FaFilm />, label: "Old School Cartoons",link:"/cartoon-categories" },
              { icon: <FaTv />, label: "Movies & TV Shows",link:"#" },
              { icon: <FaMusic />, label: "Music",link:"#" },
              { icon: <FaCameraRetro />, label: "Photography",link:"#" },
              { icon: <FaDumbbell />, label: "Sports & Fitness",link:"#" },
              { icon: <FaMobileAlt />, label: "Technology & Gadgets" ,link:"#"},
              { icon: <FaGlobe />, label: "Travel & Exploration",link:"#" },
              { icon: <FaFeatherAlt />, label: "Writing & Journaling",link:"#" },
              { icon: <FaCogs />, label: "Settings",link:"#" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.link}
                  className="flex rounded hover:bg-gray-200 items-center px-4 py-2 space-x-4"
                >
                  <span className="text-red-600">{item.icon}</span>
                  <span className="text-[#0B3954]">{item.label}</span>  
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
