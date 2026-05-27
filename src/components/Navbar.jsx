import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 bg-[#030712] w-full z-10 flex justify-between items-center px-8 py-5 border-b border-white/10">
      <h1
        className="text-3xl font-black cursor-pointer bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        onClick={() => window.location.reload()}
      >
        Toolers
      </h1>

      <div className="flex gap-10 items-center">
        <Link to="/">Home</Link>

        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/login" className="gradient px-5 py-2 rounded-xl">
          SignIn
        </Link>
      </div>
    </div>
  );
}
