import {
  FaUpload,
  FaExchangeAlt,
  FaDownload,
  FaShieldAlt,
  FaRocket,
  FaCloud,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload Your File",
      description:
        "Users can upload documents, PDFs, images, and other supported file formats securely using the drag and drop upload system.",
    },

    {
      icon: <FaExchangeAlt />,
      title: "Choose Output Format",
      description:
        "Select the desired output format such as PDF, DOCX, JPG, PNG and many more supported conversion types.",
    },

    {
      icon: <FaRocket />,
      title: "Instant Processing",
      description:
        "The backend processing engine instantly starts converting files using optimized conversion libraries and cloud processing architecture.",
    },

    {
      icon: <FaDownload />,
      title: "Download Converted File",
      description:
        "After successful conversion, users can instantly download their converted file directly from the dashboard.",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure File Uploads",
      description:
        "All uploaded files are processed securely with protected server-side handling and temporary storage.",
    },

    {
      icon: <FaCloud />,
      title: "Cloud-Based Architecture",
      description:
        "Modern SaaS architecture ensures smooth performance, scalability and optimized backend conversion workflows.",
    },

    {
      icon: <FaRocket />,
      title: "High-Speed Conversion",
      description:
        "Optimized backend conversion engines provide fast processing speed for images, documents and PDF files.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-2 pb-16">
      {/* HEADER */}

      <div className="text-center mb-28">
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
          How <br />
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Toolers
          </span>{" "}
          Works
        </motion.h1>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl mx-auto mt-10">
          Toolers is a modern SaaS-based file conversion platform designed to
          provide fast, secure and efficient file transformation services for
          students, professionals and businesses. The platform allows users to
          convert multiple file formats instantly using modern backend
          conversion architecture and responsive frontend technologies.
        </p>
      </div>

      {/* STEPS */}

      <div className="grid lg:grid-cols-2 gap-10">
        {steps.map((step, i) => (
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
              delay: i * 0.2,
            }}
            className="glass rounded-4xl p-10 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-3xl gradient flex items-center justify-center text-4xl mb-8">
              {step.icon}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-black">
                0{i + 1}
              </div>

              <h2 className="text-4xl font-black">{step.title}</h2>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ARCHITECTURE SECTION */}

      <div className="mt-40">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black">
            Modern SaaS <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Toolers is developed using modern frontend and backend technologies
            to deliver a smooth and scalable user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.2,
              }}
              className="glass rounded-4xl p-10 text-center hover:translate-y-2.5 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full gradient mx-auto flex items-center justify-center text-5xl mb-8">
                {item.icon}
              </div>

              <h2 className="text-3xl font-black mb-6">{item.title}</h2>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TECH STACK */}

      <div className="mt-40 glass rounded-[40px] p-16">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black">
            Technologies <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Used
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black mb-4">Frontend</h2>

            <p className="text-zinc-400 leading-relaxed">
              React.js, Tailwind CSS v4, Framer Motion, React Router DOM, React
              Icons
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black mb-4">Backend</h2>

            <p className="text-zinc-400 leading-relaxed">
              Node.js, Express.js, Multer, REST APIs
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black mb-4">Database</h2>

            <p className="text-zinc-400 leading-relaxed">
              MongoDB Atlas cloud database for storing conversion history and
              application data.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black mb-4">Conversion Engine</h2>

            <p className="text-zinc-400 leading-relaxed">
              Sharp image processing, LibreOffice conversion engine and
              optimized backend conversion logic.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="text-center mt-40">
        <h2 className="text-7xl font-black leading-tight">
          Ready To Convert <br />
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Your Files?
          </span>
        </h2>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
          Start converting files with Toolers and experience modern SaaS-level
          file conversion with responsive UI, secure uploads and lightning-fast
          performance.
        </p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <Link
            to="/converter"
            className="gradient px-10 py-5 rounded-2xl text-xl font-black hover:scale-[1.03] transition-all duration-300"
          >
            Start Converting
          </Link>

          <Link
            to="/pricing"
            className="glass px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-all duration-300"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
