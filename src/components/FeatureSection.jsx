import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      id="workflow"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-logo-color rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Workflow
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            your SMS bot
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap text-center mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex justify-center items-center h-[150px] mb-6">
              <img
                className="w-15 h-full border border-neutral-300"
                src={feature.image}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;