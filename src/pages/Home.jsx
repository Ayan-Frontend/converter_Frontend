import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}

      <div className="max-w-7xl mx-auto py-32 px-6 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-8xl font-black leading-26"
        >
          Convert Files <br />
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Like a Pro
          </span>
        </motion.h1>

        <p className="text-zinc-400 mt-8 text-xl max-w-3xl mx-auto leading-relaxed">
          Convert PDF, DOCX, PNG, JPG and many more formats with lightning-fast
          speed and modern SaaS experience.
        </p>

        <div className="flex justify-center gap-6 mt-12">
          <Link
            to="/converter"
            className="gradient px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.03] transition"
          >
            Start Converting
          </Link>

          <Link
            to="/pricing"
            className="glass px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* FEATURES */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-32">
        <div className="glass p-10 rounded-3xl">
          <h2 className="text-3xl font-black">Fast Conversion</h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            Convert files instantly with optimized backend processing.
          </p>
        </div>

        <div className="glass p-10 rounded-3xl">
          <h2 className="text-3xl font-black">Secure Uploads</h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            Your files remain secure and protected during conversion.
          </p>
        </div>

        <div className="glass p-10 rounded-3xl">
          <h2 className="text-3xl font-black">Modern SaaS UI</h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            Experience premium dark UI with smooth animations.
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
