import { motion } from "framer-motion";

const card = [
  {
    id: 1,
    left: "5%",
    rotate: -20,
    color: "#F6C6D3",
    duration: 11,
  },
  {
    id: 2,
    left: "20%",
    rotate: 10,
    color: "#F2E9DA",
    duration: 8,
  },
  {
    id: 3,
    left: "40%",
    rotate: -15,
    color: "#7B61FF",
    duration: 13,
  },
  {
    id: 4,
    left: "60%",
    rotate: 18,
    color: "#D7D56D",
    duration: 9,
  },
  {
    id: 5,
    left: "75%",
    rotate: -10,
    color: "#3B82F6",
    duration: 12,
  },
  {
    id: 6,
    left: "90%",
    rotate: 14,
    color: "#F97316",
    duration: 10,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0D18] text-white">
      <div className="absolute inset-0 bg-[#0B0D18]/75" />
      {card.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute rounded-3xl overflow-hidden shadow-2xl"
          style={{
            top: "-350px",
            left: item.left,
            width: 240,
            height: 320,
            background: item.color,
            rotate: `${item.rotate}deg`,
          }}
          initial={{
            y: -500,
            opacity: 0,
          }}
          animate={{
            y: ["0vh", "140vh"],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: item.duration,
            delay: index * 0.8,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
          }}
        >
          <div className="h-full flex items-center justify-center bg-white/80">
            IMAGE
          </div>
        </motion.div>
      ))}
      <div className="relative z-20">
        <div className="pt-10 flex justify-center">
          <h2 className="text-3xl font-bold">The Interview Kit</h2>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-24 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            Land a <span className="text-yellow-400 italic">killer</span>
            <br />
            job in
            <br />
            product design
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            Get the free step-by-step guide to the product design interview
            process.
          </p>

          <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 rounded-xl text-black text-xl font-semibold">
            Download on Figma →
          </button>

          <div className="flex justify-center mt-12">
            <button className="rounded-full bg-[#23252F] px-14 py-5 text-lg hover:bg-[#31333d] transition">
              LEARN MORE ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
