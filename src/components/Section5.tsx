const Section5 = () => {
  return (
    <section className="bg-[#0B0D18] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl leading-relaxed text-gray-200 max-w-5xl">
          Eight chapters of guides, examples, tips & tricks that'll help you
          land your next (or first) role as a product designer. Written with
          expert insight about the interview process.
        </p>
        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#13251f] flex items-center justify-center text-3xl">
              👶
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Great for early-career designers
            </h3>

            <p className="text-gray-400 text-xl leading-9 mt-6">
              Looking for your first internship or full-time job? No problem –
              this kit is created with you in mind.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-full bg-[#13251f] flex items-center justify-center text-3xl">
              🧓
            </div>

            <h3 className="text-3xl font-bold mt-8">
              ...And also more experienced ones
            </h3>

            <p className="text-gray-400 text-xl leading-9 mt-6">
              Even if you've interviewed before, The Interview Kit is the
              perfect refresher for your next job hunt.
            </p>
          </div>
        </div>

        <div className="mt-24 overflow-hidden">
          <svg
            viewBox="0 0 1200 40"
            className="w-full h-10"
            preserveAspectRatio="none"
          >
            <path
              d="
              M0 20
              Q15 5 30 20
              T60 20
              T90 20
              T120 20
              T150 20
              T180 20
              T210 20
              T240 20
              T270 20
              T300 20
              T330 20
              T360 20
              T390 20
              T420 20
              T450 20
              T480 20
              T510 20
              T540 20
              T570 20
              T600 20
              T630 20
              T660 20
              T690 20
              T720 20
              T750 20
              T780 20
              T810 20
              T840 20
              T870 20
              T900 20
              T930 20
              T960 20
              T990 20
              T1020 20
              T1050 20
              T1080 20
              T1110 20
              T1140 20
              T1170 20
              T1200 20
              "
              fill="none"
              stroke="#454852"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="mt-24">
          <p className="uppercase tracking-[4px] text-sm text-gray-400">
            Craft Your Story & Stand Out
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-[#F7F2E6]">
            Interviewing is all about
            <br />
            <span className="text-[#F5B52E] italic">telling a story.</span>{" "}
            Learn how to
            <br />
            tell a great one.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section5;
