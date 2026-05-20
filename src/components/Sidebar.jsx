import { FaHome, FaHistory, FaCrown, FaCog } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const items = [
    {
      icon: <FaHome />,
      label: "Home",
      link: "/",
    },
    {
      icon: <FaHistory />,
      label: "History",
      link: "",
    },
    {
      icon: <FaCrown />,
      label: "Pricing",
      link: "/pricing",
    },
    {
      icon: <FaCog />,
      label: "Settings",
      link: "",
    },
  ];

  return (
    <div className="w-70 min-h-screen glass border-r border-white/10 p-6">
      <h1
        className="text-4xl cursor-pointer font-black bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        onClick={() => navigate("/")}
      >
        Toolers
      </h1>

      <div className="mt-14 flex flex-col gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="flex items-center gap-4 p-5 rounded-2xl hover:bg-white/10 transition group"
          >
            <div className="text-cyan-400 text-2xl group-hover:scale-125 transition">
              {item.icon}
            </div>

            <p className="text-lg font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
