import grid1 from "../assets/grid-1.png";
import grid2 from "../assets/grid-2.png";
import grid5 from "../assets/grid-5.png";
import grid6 from "../assets/grid-6.png";
import grid4 from "../assets/grid-4.png";

const cards = [
  { id: 1, image: grid1 },
  { id: 2, image: grid2 },
  { id: 3, image: grid4 },
  { id: 4, image: grid6 },
  { id: 5, image: grid5 },
  { id: 6, image: grid2 },
];

const Section4 = () => {
  return (
    <section className="bg-[#0b0d18] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-xs tracking-[4px] text-gray-400 text-center">
          Goes Down Easy
        </p>

        <h2 className="text-center mt-4 text-4xl md:text-6xl font-black text-[#F5F2E8] leading-tight">
          Created in Figma with tons of
          <br />
          <span className="text-[#FDBD31] italic">juicy examples</span> and
          visuals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <div key={card.id} className="rounded-2xl overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
