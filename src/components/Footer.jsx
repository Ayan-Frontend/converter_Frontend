import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-4xl font-black bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Toolers
            </h1>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              Modern SaaS platform for converting files instantly with blazing
              fast performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-5">Product</h2>

            <div className="flex flex-col gap-3 text-zinc-400">
              <Link to={""}>Features</Link>

              <Link to={"/pricing"}>Pricing</Link>

              <Link to={"/dashboard"}>Dashboard</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-5">Resources</h2>

            <div className="flex flex-col gap-3 text-zinc-400">
              <Link to={""}>Docs</Link>
              <Link to={""}>API</Link>
              <Link to={""}>Support</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-5">Social</h2>

            <div className="flex gap-4 text-2xl">
              <a className="glass p-4 rounded-2xl hover:scale-110 transition">
                <FaGithub />
              </a>

              <a className="glass p-4 rounded-2xl hover:scale-110 transition">
                <FaTwitter />
              </a>

              <a className="glass p-4 rounded-2xl hover:scale-110 transition">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-zinc-500 flex justify-between">
          <p>© 2026 Toolers</p>

          <p>Built with React & Node.js</p>
        </div>
      </div>
    </footer>
  );
}
