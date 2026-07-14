const features = [
  {
    icon: "🎨",
    title: "Build a portfolio",
    desc: "Learn how to level up your portfolio and how to showcase your work like a pro.",
    bg: "bg-[#16233d]",
  },
  {
    icon: "📖",
    title: "Craft your case studies",
    desc: "Show employers compelling stories about your best design work.",
    bg: "bg-[#2b203d]",
  },
  {
    icon: "🧑‍💻",
    title: "Solve design challenges",
    desc: "Know what to expect with technical evaluations like design challenges and app critiques.",
    bg: "bg-[#1b2d25]",
  },
  {
    icon: "✨",
    title: "Ace the interviews",
    desc: "Detailed guides to on-site interviews, screener calls, hiring manager 1:1s, and more.",
    bg: "bg-[#32251d]",
  },
];

const Section3 = () => {
  return (
    <section className="bg-[#0B0D18] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {features.map((item, index) => (
            <div key={index} className="flex gap-5">
              <div
                className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center text-2xl shrink-0`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-white text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xl leading-9 mt-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <svg
            viewBox="0 0 1200 40"
            className="w-full h-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
              M0 20
              Q20 0 40 20
              T80 20
              T120 20
              T160 20
              T200 20
              T240 20
              T280 20
              T320 20
              T360 20
              T400 20
              T440 20
              T480 20
              T520 20
              T560 20
              T600 20
              T640 20
              T680 20
              T720 20
              T760 20
              T800 20
              T840 20
              T880 20
              T920 20
              T960 20
              T1000 20
              T1040 20
              T1080 20
              T1120 20
              T1160 20
              T1200 20
              "
              stroke="#52525B"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section3;
