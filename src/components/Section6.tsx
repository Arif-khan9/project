import img from "../assets/story.png";

const Section6 = () => {
  return (
    <section className="bg-[#0B0D18] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#171922] rounded-3xl p-8">
          <img
            src={img}
            alt="Story"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center mt-20">
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-200">
            Learn how to tell stories about your work and design experience. Get
            inspired by examples from great designers and companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-24">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#301A14] flex items-center justify-center text-3xl">
              🔥
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Your interviewing cheat sheet
            </h3>

            <p className="text-gray-400 text-xl leading-9 mt-6">
              Get insights on the questions you'll be asked in every interview,
              and how to answer them.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-full bg-[#10254D] flex items-center justify-center text-3xl">
              🪐
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Make your story stand out
            </h3>

            <p className="text-gray-400 text-xl leading-9 mt-6">
              Most designers tell the same stories about their work. Learn how
              to tell yours like an expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
