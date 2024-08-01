import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div id="pricing" className="mt-20 border-b border-neutral-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center mb-10">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-2/5 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8 text-center">
                {option.title}
                <br />
                {option.title === "Coratext" && (
                  <span className="bg-gradient-to-r from-logo-color to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Perfect For You)
                  </span>
                )}
              </p>
              <p className="mb-8 text-center">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">
                  One-time fee
                </span>
              </p>
              <ul className="flex flex-col items-start">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-10 flex">
                    <CheckCircle2 className="w-8" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href=""
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-logo-darker border border-logo-darker rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
