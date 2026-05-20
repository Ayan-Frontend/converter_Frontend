import Navbar from "../components/Navbar";

import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto py-24 px-6">
        {/* HEADING */}

        <div className="text-center mb-20">
          <h1 className="text-7xl font-black leading-tight">
            Simple <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>

          <p className="text-zinc-400 mt-6 text-xl max-w-2xl mx-auto">
            Powerful conversion tools for everyone.
          </p>
        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            price="0"
            features={[
              "10 conversions/day",
              "Basic support",
              "Image conversion",
              "PDF export",
            ]}
          />

          <PricingCard
            active
            title="Pro"
            price="9"
            features={[
              "Unlimited conversions",
              "Priority support",
              "Cloud storage",
              "Fast processing",
              "No ads",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="49"
            features={[
              "Team access",
              "API access",
              "Dedicated servers",
              "Analytics dashboard",
              "Custom integrations",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
