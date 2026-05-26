import Navbar from "../components/Navbar";

import { FaGoogle, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-hidden relative">
      <Navbar />

      {/* BACKGROUND GLOWS */}

      <div className="absolute -top-30 -left-30 w-[320px] h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-30 -right-30 w-[320px] h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* MAIN */}

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <h1 className="text-7xl font-black leading-tight">
            Welcome Back <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              To ConvertX
            </span>
          </h1>

          <p className="text-zinc-400 text-xl mt-8 leading-relaxed max-w-xl">
            Securely login to your account and access your file conversions,
            cloud history and premium SaaS features instantly.
          </p>

          {/* FEATURES */}

          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl gradient flex items-center justify-center text-2xl font-black">
                ✓
              </div>

              <p className="text-lg text-zinc-300">
                Secure cloud-based architecture
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl gradient flex items-center justify-center text-2xl font-black">
                ✓
              </div>

              <p className="text-lg text-zinc-300">
                Lightning-fast file conversion
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl gradient flex items-center justify-center text-2xl font-black">
                ✓
              </div>

              <p className="text-lg text-zinc-300">
                Modern SaaS dashboard experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative mt-10"
        >
          {/* CARD */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.4)]">
            {/* TOP GRADIENT */}

            <div className="absolute inset-x-0 top-0 h-1 gradient"></div>

            <div className="p-10 md:p-14">
              {/* HEADER */}

              <div className="text-center mb-10">
                <h1 className="text-5xl font-black">Sign In</h1>

                <p className="text-zinc-400 mt-4 text-lg">
                  Access your account securely
                </p>
              </div>

              {/* SOCIAL LOGIN */}

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold">
                  <FaGoogle className="text-xl" />
                  Google
                </button>

                <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold">
                  <FaGithub className="text-xl" />
                  GitHub
                </button>
              </div>

              {/* DIVIDER */}

              <div className="flex items-center gap-4 my-10">
                <div className="h-px bg-white/10 flex-1"></div>

                <p className="text-zinc-500">OR</p>

                <div className="h-px bg-white/10 flex-1"></div>
              </div>

              {/* FORM */}

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-400 text-sm">Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      mt-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      outline-none
                      focus:border-cyan-500
                      transition
                    "
                  />
                </div>

                <div>
                  <label className="text-zinc-400 text-sm">Password</label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="
                      w-full
                      mt-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      outline-none
                      focus:border-cyan-500
                      transition
                    "
                  />
                </div>
              </div>

              {/* OPTIONS */}

              <div className="flex justify-between items-center mt-6">
                <label className="flex items-center gap-3 text-zinc-400">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button className="text-cyan-400 hover:underline">
                  Forgot Password?
                </button>
              </div>

              {/* BUTTON */}

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
                duration-300
                shadow-2xl
                shadow-cyan-500/20
              "
              >
                Sign In
              </button>

              {/* REGISTER */}

              <p className="text-center text-zinc-400 mt-8 text-lg">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
