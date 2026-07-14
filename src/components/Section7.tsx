import img from "../assets/application.png";
import img2 from "../assets/application2.png";
import img3 from "../assets/application3.png";
import img4 from "../assets/application4.png";
import img5 from "../assets/application5.png";
import img6 from "../assets/application6.png";
import img7 from "../assets/application7.png";
import img8 from "../assets/application8.png";

const images = [img, img2, img3, img4, img5, img6, img7, img8];

const chapters = [
  {
    title: "Build the portfolio",

    list: [
      "Tools for building portfolios",
      "Why portfolios are important",
      "What makes a portfolio great",
      "Who portfolios are for",
      "50+ inspiring portfolios",
    ],
  },
  {
    title: "Craft the case study",

    list: [
      "How to choose your projects",
      "Writing compelling stories",
      "Visualizing the work",
      "Case study breakdowns",
      "Case study inspiration",
    ],
  },
  {
    title: "Portfolio presentations",

    list: [
      "Introducing yourself",
      "Selecting projects",
      "Structuring presentation",
      "Presentation examples",
      "How you're evaluated",
    ],
  },
  {
    title: "Resumes & cover letters",

    list: [
      "Communicating experience",
      "Writing tips",
      "Visual design",
      "Examples",
      "Cover letters",
    ],
  },
  {
    title: "Build the portfolio",

    list: [
      "Tools for building portfolios",
      "Why portfolios are important",
      "What makes a portfolio great",
      "Who portfolios are for",
      "50+ inspiring portfolios",
    ],
  },
  {
    title: "Build the portfolio",

    list: [
      "Tools for building portfolios",
      "Why portfolios are important",
      "What makes a portfolio great",
      "Who portfolios are for",
      "50+ inspiring portfolios",
    ],
  },
  {
    title: "Build the portfolio",

    list: [
      "Tools for building portfolios",
      "Why portfolios are important",
      "What makes a portfolio great",
      "Who portfolios are for",
      "50+ inspiring portfolios",
    ],
  },
  {
    title: "Build the portfolio",

    list: [
      "Tools for building portfolios",
      "Why portfolios are important",
      "What makes a portfolio great",
      "Who portfolios are for",
      "50+ inspiring portfolios",
    ],
  },
];

const Section7 = () => {
  return (
    <section className="bg-[#0b0d18]  px-6">
      <div className="max-w-6xl mx-auto bg-[#171922] rounded-3xl p-10 md:p-16 relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl">
          ✴️
        </div>

        <h2 className="text-center text-5xl md:text-6xl font-black text-[#F7F3E8]">
          See what's inside
        </h2>

        <p className="text-center text-gray-400 text-xl mt-5">
          Eight chapters of delicious detail.
        </p>

        <div className="flex justify-center mt-8">
          <button className="bg-[#FDBD31] hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold">
            Download on Figma →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {chapters.map((item, index) => (
            <div key={index}>
              <div
                className="h-60 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={images[index]}
                  alt="book image"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-3xl font-bold text-[#F7F3E8] mt-6">
                {item.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {item.list.map((text, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span>➜</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
