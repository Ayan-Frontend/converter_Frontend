import {
  FaBolt,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaFilePdf,
  FaRocket,
  FaLock,
  FaGlobe,
  FaSyncAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  const trusted = [
    {
      title: "99.9%",
      para: "Processing Reliability",
    },
    {
      title: "Fast",
      para: "Cloud Conversion",
    },
    {
      title: "Secure",
      para: "SaaS Experience",
    },
    {
      title: "Modern",
      para: "SaaS Experience",
    },
  ];

  const features = [
    {
      icon: <FaBolt />,
      title: "Lightning Fast Conversion",
      description:
        "Optimized backend conversion engine delivers high-speed file processing with minimal waiting time.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure File Processing",
      description:
        "Files are securely uploaded and processed using protected backend architecture and temporary storage.",
    },

    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud-Based System",
      description:
        "Modern SaaS cloud infrastructure ensures smooth scalability and high performance.",
    },

    {
      icon: <FaFilePdf />,
      title: "Multiple File Formats",
      description:
        "Convert PDF, DOCX, JPG, PNG and multiple other supported file formats instantly.",
    },

    {
      icon: <FaRocket />,
      title: "Modern SaaS Experience",
      description:
        "Built with modern frontend technologies and premium user experience principles.",
    },

    {
      icon: <FaLock />,
      title: "Privacy Focused",
      description:
        "Uploaded files remain protected and are securely handled during the conversion workflow.",
    },

    {
      icon: <FaGlobe />,
      title: "Accessible Anywhere",
      description:
        "Use the platform from any device with a fully responsive modern interface.",
    },

    {
      icon: <FaSyncAlt />,
      title: "Real-Time Processing",
      description:
        "Backend conversion system instantly processes uploads and generates downloadable output files.",
    },
  ];

  return (
    <section className="relative pt-30 pb-20 overflow-hidden">
      {/* BACKGROUND GLOWS */}

      <div className="absolute top-0 -left-30 w-[320px] h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 -right-30 w-[320px] h-80 bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <div className="text-center mb-24">
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-7xl md:text-8xl font-black leading-tight"
          >
            Powerful <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h1>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl mx-auto mt-10">
            Toolers provides a modern SaaS-level file conversion experience with
            fast processing, secure uploads and scalable backend architecture
            designed for performance and reliability.
          </p>
        </div>

        {/* FEATURE GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                transition-all
                duration-300
                hover:border-cyan-500/40
                hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
              "
            >
              {/* INNER GLOW */}

              <div className="absolute -top-15 -right-15 w-35 h-35 bg-cyan-500/10 blur-[80px] rounded-full"></div>

              {/* ICON */}

              <div
                className="
                relative
                w-20
                h-20
                rounded-3xl
                gradient
                flex
                items-center
                justify-center
                text-4xl
                shadow-2xl
                shadow-cyan-500/20
              "
              >
                {feature.icon}
              </div>

              {/* CONTENT */}

              <div className="relative mt-8">
                <h2 className="text-3xl font-black leading-tight">
                  {feature.title}
                </h2>

                <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* HOVER LINE */}

              <div
                className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                gradient
                group-hover:w-full
                transition-all
                duration-500
              "
              ></div>
            </motion.div>
          ))}
        </div>

        {/* TRUST SECTION */}

        <div
          className="
          mt-32
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          overflow-hidden
          relative
        "
        >
          {/* GLOW */}

          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10"></div>

          <div className="relative p-14 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}

              <div>
                <h2 className="text-6xl font-black leading-tight">
                  Trusted Modern <br />
                  <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    SaaS Architecture
                  </span>
                </h2>

                <p className="text-zinc-400 text-xl mt-8 leading-relaxed">
                  Toolers is built using modern frontend and backend
                  technologies including React.js, Tailwind CSS, Node.js and
                  scalable cloud architecture to deliver a premium file
                  conversion experience.
                </p>
              </div>

              {/* RIGHT */}

              <div className="grid grid-cols-2 gap-6">
                {trusted.map((trust, idx) => (
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h1 className="text-4xl font-black bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {trust.title}
                    </h1>

                    <p className="text-zinc-400 mt-4 text-lg">{trust.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
