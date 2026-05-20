import { motion } from "framer-motion";

export default function StatsCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="glass rounded-3xl p-8 relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-lg">{title}</p>

          <h2 className="text-5xl font-black mt-5">{value}</h2>
        </div>

        <div className="text-5xl text-cyan-400">{icon}</div>
      </div>
    </motion.div>
  );
}
