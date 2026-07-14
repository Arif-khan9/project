const Footer = () => {
  return (
    <footer className="bg-[#0B0D18] ">
      <div className="max-w-5xl mx-auto bg-[#F5F0DB] rounded-2xl px-8 md:px-16 py-12">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
            IMG
          </div>

          <h3 className="text-4xl font-bold text-black">
            Hello! My name is Oliver.
          </h3>
        </div>

        <div className="space-y-8 text-[#262626] text-xl leading-10">
          <p>
            I'm a Senior Product Designer at{" "}
            <span className="underline">Handshake</span> and graduate of
            University of Washington's{" "}
            <span className="underline">
              Master of Human-Computer Interaction + Design
            </span>{" "}
            program. I created this guide because it's something I wish I had
            when I was breaking into product design.
          </p>

          <p>
            Throughout my years in design, I've been fortunate enough to
            interview with dozens of different companies and also help interview
            countless product design candidates. This kit is intended to share
            my experience and advice from being on both sides of the interview
            process.
          </p>

          <p>
            This kit is also informed by research and discussions with
            recruiters, design managers, and other product designers. If you
            have any questions or feedback, please feel free to reach out at
            <span className="underline"> oliverengel6@gmail.com</span>.
          </p>
        </div>
      </div>
      <div className="mt-16 bg-[#18181F] py-10">
        <p className="text-center text-gray-300 text-2xl">
          The Interview Kit — © 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
