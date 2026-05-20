import { FaFilePdf, FaImage, FaFileWord } from "react-icons/fa";

export default function FileCard({ name, format, date, url }) {
  const getIcon = () => {
    if (format === "pdf") {
      return <FaFilePdf />;
    }

    if (format === "jpg" || format === "png") {
      return <FaImage />;
    }

    return <FaFileWord />;
  };

  return (
    <div className="glass rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-5xl text-cyan-400 mb-5 group-hover:rotate-6 transition">
            {getIcon()}
          </div>

          <h2 className="text-xl font-bold line-clamp-1">{name}</h2>

          <p className="text-zinc-400 mt-2">Converted to {format}</p>
        </div>

        <div className="text-right">
          <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl text-sm">
            {format.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-zinc-500 text-sm">{date}</p>

        <a
          href={url}
          target="_blank"
          className="gradient px-5 py-2 rounded-xl font-semibold hover:opacity-90"
        >
          Download
        </a>
      </div>
    </div>
  );
}
