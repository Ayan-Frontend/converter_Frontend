import { useEffect, useState } from "react";
import API from "../services/api";
import FileCard from "./FileCard";
import { useNavigate } from "react-router-dom";

export default function ConversionHistory() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/history");

      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-black">Conversion History</h1>

          <p className="text-zinc-400 mt-3">View all converted files</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="gradient cursor-pointer px-6 py-3 rounded-2xl font-bold"
        >
          Export Data
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {history.map((item) => (
          <FileCard
            key={item._id}
            name={item.originalName}
            format={item.outputFormat}
            date={new Date(item.createdAt).toLocaleDateString()}
            url={item.outputUrl}
          />
        ))}
      </div>
    </div>
  );
}
