import pagesDesktop from "../assets/pages-desktop.png";

const Section2 = () => {
  return (
    <section className="bg-[#0B0D18] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <img
            src={pagesDesktop}
            alt="Pages"
            className="w-full max-w-5xl object-contain"
          />
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl leading-relaxed font-light text-[#F3F0E8]">
            Everything you need to know to land a product design job, from the
            resume to the on-site. All packaged into a delightful little guide.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section2;
