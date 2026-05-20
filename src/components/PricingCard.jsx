import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PricingCard({
  title,
  price,
  features,
  active,
  action,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.03]
      ${active ? "gradient text-white" : "glass"}`}
    >
      {active && (
        <div className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
          Popular
        </div>
      )}

      <h2 className="text-3xl font-black">{title}</h2>

      <div className="mt-8">
        <span className="text-6xl font-black">${price}</span>
        <span className="text-lg ml-2">/month</span>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {features.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-full">
              <FaCheck />
            </div>

            <p>{item}</p>
          </div>
        ))}
      </div>

      <button
        className="w-full cursor-pointer mt-10 bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </div>
  );
}
