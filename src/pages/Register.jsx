import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-hidden relative">
      <Navbar />

      {/* GLOW */}

      <div className="absolute -top-30 -right-30 w-[320px] h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-30 -left-30 w-[320px] h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-xl mx-auto py-20 px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-1 gradient"></div>

          <div className="p-10">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-black">Create Account</h1>

              <p className="text-zinc-400 mt-4">Join Toolers today</p>
            </div>

            <div className="space-y-6">
              <input
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500 transition"
              />

              <input
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500 transition"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500 transition"
              />
            </div>

            <button
              className="
              w-full
              mt-10
              gradient
              py-5
              rounded-2xl
              text-xl
              font-black
              hover:scale-[1.01]
              transition-all
            "
            >
              Create Account
            </button>

            <p className="text-center text-zinc-400 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:underline font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
