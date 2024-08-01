import { steps } from "../constants";

const StepSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800">
      <div className="text-center">
        <span className="bg-neutral-900 text-logo-color rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Steps
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Create An Automated{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            Selling Machine With CoraText{" "}
          </span>
          In Just 3 Simple Steps
        </h2>
      </div>
      <div className="flex flex-wrap text-center mt-10 lg:mt-20">
        {steps.map((step, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex justify-center items-center h-[150px] mb-6">
              <img className="w-15 h-full" src={step.image} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="mt-1 mb-6 text-xl">{step.text}</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
