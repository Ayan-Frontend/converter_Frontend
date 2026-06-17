import { useState } from "react";
import API from "../services/api";
import Loader from "./Loader";
import Toast from "./Toast";
import { FiUploadCloud, FiCheckCircle, FiFile } from "react-icons/fi";
import { motion } from "framer-motion";

export default function UploadZone() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("pdf");
  const [download, setDownload] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const handleConvert = async () => {
  //   if (!file) {
  //     setError("Please upload a file");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("format", format);

  //   try {
  //     setLoading(true);
  //     setError("");
  //     const res = await API.post("/convert", formData);

  //     setDownload(res.data.url);
  //   } catch (err) {
  //     setError("Conversion failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleConvert = async () => {
    if (!file) {
      setError("Please upload a file");

      return;
    }

    try {
      setLoading(true);

      setError("");

      const formData = new FormData();

      formData.append("file", file);

      formData.append("format", format);

      // API REQUEST

      const res = await API.post("/convert", formData);

      // SAVE DOWNLOAD URL

      setDownload(res.data.url);
    } catch (err) {
      console.log(err);

      setError("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-14">
      {/* BACKGROUND GLOWS */}

      <div className="absolute -top-20 l-eft-20 w-55 h-55 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-20 -right-20 w-55 h-55 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CARD */}

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.4)]"
      >
        {/* TOP GRADIENT */}

        <div className="absolute inset-x-0 top-0 h-1 gradient"></div>

        {/* CONTENT */}

        <div className="p-10 md:p-14">
          {error && <Toast message={error} />}

          {/* HEADER */}

          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-[28px] gradient flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/20">
              <FiUploadCloud className="text-5xl text-white" />
            </div>

            <h1 className="text-5xl font-black mt-8 leading-tight">
              Upload & Convert <br />
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Your Files
              </span>
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Convert documents, images and PDFs instantly with modern
              SaaS-level file processing.
            </p>
          </div>

          {/* DROP AREA */}

          <label
            className="
        group
        relative
        block
        border-2
        border-dashed
        border-cyan-500/40
        hover:border-cyan-400
        rounded-4xl
        p-16
        transition-all
        duration-300
        cursor-pointer
        bg-linear-to-b
        from-white/4
        to-white/2
        hover:from-cyan-500/10
        hover:to-purple-500/10
      "
          >
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <div className="flex flex-col items-center text-center">
              <div
                className="
            w-24
            h-24
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            flex
            items-center
            justify-center
            group-hover:scale-110
            transition
          "
              >
                <FiUploadCloud className="text-5xl text-cyan-400" />
              </div>

              <h2 className="text-3xl font-black mt-8">Drag & Drop Files</h2>

              <p className="text-zinc-400 mt-4 text-lg">
                or click to browse from device
              </p>

              <div className="flex gap-3 mt-8 flex-wrap justify-center">
                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  PDF
                </span>

                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  DOCX
                </span>

                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  JPG
                </span>

                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  PNG
                </span>
              </div>
            </div>
          </label>

          {/* FILE PREVIEW */}

          {file && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
            mt-10
            flex
            items-center
            justify-between
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
              w-16
              h-16
              rounded-2xl
              gradient
              flex
              items-center
              justify-center
            "
                >
                  <FiFile className="text-3xl text-white" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">{file.name}</h2>

                  <p className="text-zinc-400 mt-1">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>

              <FiCheckCircle className="text-4xl text-green-400" />
            </motion.div>
          )}

          {/* FORMAT SELECT */}

          <div className="mt-10">
            <label className="text-zinc-400 text-lg">
              Select Output Format
            </label>

            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="..."
            >
              <optgroup label="Documents">
                <option value="pdf">PDF</option>

                <option value="docx">DOCX</option>

                <option value="txt">TXT</option>

                <option value="html">HTML</option>
              </optgroup>

              <optgroup label="Images">
                <option value="png">PNG</option>

                <option value="jpg">JPG</option>

                <option value="webp">WEBP</option>
              </optgroup>
            </select>

            {/* <select
              className="
            w-full
            mt-4
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            text-lg
            outline-none
            focus:border-cyan-500
            transition
          "
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="pdf">PDF Document</option>

              <option value="docx">DOCX Document</option>

              <option value="jpg">JPG Image</option>

              <option value="png">PNG Image</option>
            //</select> */}
          </div>

          {/* BUTTON */}

          <motion.button
            whileTap={{
              scale: 0.97,
            }}
            whileHover={{
              scale: 1.01,
            }}
            onClick={handleConvert}
            className="
          w-full
          mt-10
          gradient
          py-5
          rounded-2xl
          text-xl
          font-black
          shadow-2xl
          shadow-cyan-500/20
          hover:shadow-cyan-500/40
          transition-all
          duration-300
          cursor-pointer
        "
          >
            {loading ? "Converting File..." : "Convert File Instantly"}
          </motion.button>

          {/* LOADER */}

          {loading && <Loader />}

          {/* DOWNLOAD */}

          {download && (
            <motion.a
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              href={download}
              target="_blank"
              className="
            mt-8
            flex
            items-center
            justify-center
            gradient
            py-5
            rounded-2xl
            text-xl
            font-black
            hover:scale-[1.01]
            transition-all
            duration-300
          cursor-pointer
          "
            >
              Download Converted File
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
