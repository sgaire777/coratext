import Forbes from "../assets/workflow/forbes.png";

const Workflow = () => {
  return (
    <div id="getstarted" className="relative mt-20 border-b border-neutral-800">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          See Coratext In{" "}
          <span className="bg-gradient-to-r from-logo-color to-logo-darker text-transparent bg-clip-text">
            Action Below And Get{" "}
          </span>
          Blown Away (Demo){" "}
        </h2>
      </div>
      <div className="flex justify-center mt-12 mb-10">
        <div className="flex justify-center items-center">
          <img
            className="lg:h-[400px] h-[200px] sm:h-[300px] border border-neutral-300"
            src={Forbes}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
