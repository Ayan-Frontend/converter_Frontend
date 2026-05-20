import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div className="max-w-md mx-auto py-24 px-6">
        <div className="glass rounded-3xl p-10">
          <h1 className="text-4xl font-black mb-8">Login</h1>

          <input
            placeholder="Email"
            className="w-full bg-zinc-900 p-4 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-900 p-4 rounded-xl"
          />

          <p className="text-end mt-5 underline text-blue-400 cursor-pointer">
            don't have an account?
          </p>

          <button className="gradient w-full py-4 rounded-2xl mt-8 font-bold">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
