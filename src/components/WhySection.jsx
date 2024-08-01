import Forbes from "../assets/workflow/forbes.png";

const WhySection = () => {
  return (
    <div id="why" className="relative mt-20 border-b border-neutral-800">
      <div className="text-center">
        <span className="bg-neutral-900 text-logo-color rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Why SMS?
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          According To One Of The{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            Most Popular & Most Trusted{" "}
          </span>
          Entreprenuer Magazine{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            Forbes
          </span>
        </h2>
      </div>
      <div className="flex justify-center mt-12">
        <div className="flex justify-center items-center">
          <img
            className="lg:h-[400px] h-[200px] sm:h-[300px] border border-neutral-300"
            src={Forbes}
            alt=""
          />
        </div>
      </div>
      <div className="text-center mb-8 mt-[-20px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          SMS has{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            98%{" "}
          </span>
          Open Rates,{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            90%
          </span>
          People Read It Within{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            3 Seconds!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default WhySection;
