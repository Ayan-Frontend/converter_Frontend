import { useState } from "react";
import API from "../services/api";
import Loader from "./Loader";
import Toast from "./Toast";
import { FiUploadCloud } from "react-icons/fi";

export default function UploadZone() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("pdf");
  const [download, setDownload] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!file) {
      setError("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("format", format);

    try {
      setLoading(true);
      setError("");
      const res = await API.post("/convert", formData);

      setDownload(res.data.url);
    } catch (err) {
      setError("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl mt-10 p-10">
      {error && <Toast message={error} />}

      <div className="border-2 border-dashed border-cyan-500 rounded-3xl p-16 text-center">
        <FiUploadCloud className="text-7xl mx-auto text-cyan-400" />

        <input
          type="file"
          className="mt-8 p-3 cursor-pointer"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <select
          className="w-full mt-8 bg-zinc-900 p-4 rounded-xl"
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="pdf">PDF</option>
          <option value="docx">DOCX</option>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
        </select>

        <button
          onClick={handleConvert}
          className="gradient w-full py-4 rounded-2xl mt-8 font-bold hover:scale-[1.02] transition"
        >
          Convert File
        </button>

        {loading && <Loader />}

        {download && (
          <a
            href={download}
            target="_blank"
            className="block mt-6 text-cyan-400 underline"
          >
            Download Converted File
          </a>
        )}
      </div>
    </div>
  );
}
