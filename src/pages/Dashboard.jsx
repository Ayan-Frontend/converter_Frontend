import Sidebar from "../components/Sidebar";

import StatsCard from "../components/StatsCard";

import ConversionHistory from "../components/ConversionHistory";

import { FaFilePdf, FaImage, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-[#030712] min-h-screen text-white">
      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-10 overflow-hidden">
        {/* TOP */}

        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-black">Dashboard</h1>

            <p className="text-zinc-400 mt-3 text-lg">
              Welcome back to Toolers
            </p>
          </div>

          <button
            onClick={() => navigate("/pricing")}
            className="gradient cursor-pointer px-6 py-4 rounded-2xl font-bold hover:scale-[1.03] transition"
          >
            Upgrade Pro
          </button>
        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <StatsCard
            title="Total Conversions"
            value="124"
            icon={<FaRocket />}
          />

          <StatsCard title="PDF Files" value="82" icon={<FaFilePdf />} />

          <StatsCard title="Images Converted" value="42" icon={<FaImage />} />
        </div>

        {/* HISTORY */}

        <ConversionHistory />
      </div>
    </div>
  );
}
