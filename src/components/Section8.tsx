import img from "../assets/writing.png";

const Section8 = () => {
  return (
    <section className="bg-[#0B0D18] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-80 md:w-[450px] h-[450px] md:h-[550px] mb-8 rounded-lg overflow-hidden shadow-2xl">
          <img
            src={img}
            alt="writing"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-[#F7F3E8] text-5xl md:text-7xl font-black text-center leading-tight">
          Ready to interview?
        </h2>

        <p className="text-gray-300 text-xl md:text-3xl text-center mt-4 max-w-3xl">
          Get immediate access to The Interview Kit for free.
        </p>

        <button className="mt-8 bg-[#FDBD31] hover:bg-yellow-400 transition-all duration-300 px-10 py-5 rounded-lg text-black text-xl font-bold">
          Download on Figma →
        </button>
      </div>
    </section>
  );
};

export default Section8;
