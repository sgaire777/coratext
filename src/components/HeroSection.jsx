import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div id="hero" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Create An Automated Selling Machine
        <span className="bg-gradient-to-r from-logo-color to-red-800 text-transparent bg-clip-text">
          {" "}
          With Power Of SMS
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        The revolution has happened - I guarantee you’ve never seen anything
        like this before...
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="getstarted"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-gradient-to-r from-logo-color to-logo-darker py-3 px-4 mx-3 rounded-md cursor-pointer"
        >
          Get Started
        </Link>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md hover:bg-logo-darker border border-logo-darker"
        >
          See How It Works
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
