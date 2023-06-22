import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import useScrollMove from "../hooks/useScrollMove";

// { root }: { root: React.MutableRefObject<null> }

// root element is the one that other letter animate according to
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const root = useRef(null);

  const scrollOptions = {
    start: "90% 90%",
    end: "bottom top",
    scrub: true,
  };

  const initial = {
    x: 0,
    y: 0,
  };

  //   letter F
  const letterF = useRef(null);
  useScrollMove({
    initial,
    animate: {
      x: -200,
      y: 150,
      rotate: -20,
    },
    ref: letterF,
    root,
    scrollOptions,
  });

  // letter E
  const letterE = useRef(null);
  useScrollMove({
    initial,
    animate: {
      x: 200,
      y: 250,
      rotate: 25,
    },
    ref: letterE,
    root,
    scrollOptions,
  });

  // letter B
  const letterB = useRef(null);
  useScrollMove({
    initial,
    animate: {
      x: 200,
      y: -250,
      rotate: -15,
    },
    ref: letterB,
    root,
    scrollOptions,
  });

  // letter A
  const letterA = useRef(null);
  useScrollMove({
    initial,
    animate: {
      x: 600,
      y: -150,
      rotate: 40,
    },
    ref: letterA,
    root,
    scrollOptions,
  });
  // letter Z
  const letterZ = useRef(null);
  useScrollMove({
    initial,
    animate: {
      x: 300,
      y: 250,
      rotate: 5,
    },
    ref: letterZ,
    root,
    scrollOptions,
  });

  const heading = useRef(null);
  useScrollMove({
    initial,
    animate: {
      y: -250,
      opacity: 0.25,
    },
    ref: heading,
    root,
    scrollOptions,
  });

  return (
    <header className="h-screen relative mx-auto" ref={root}>
      {/* navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-4 md:px-6 lg:px-10 pt-3 pb-2">
        <img src="/vite.svg" alt="logo" className="w-8 lg:w-10" />
        <button className="bg-pink-300 font-bold duration-100 rounded-full px-4 py-2 hover:scale-105 text-lg sm:text-sm lg:text-2xl text-white">
          Signup
        </button>
      </nav>

      {/* letters */}
      <div className="absolute grid justify-center w-full bottom-[5rem] lg:bottom-4">
        <div ref={heading} className="w-full flex justify-center py-0 px-4">
          <p className="lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-500">
            WE BRING YOUR IDEAS TO LIFE
          </p>
        </div>
        {/* <img ref={ref} src="/imgs/letter-f.png" alt="" className="relative" /> */}
        <div className=" lg:bottom-4 w-full flex justify-center space-x-2 md:space-x-4 lg:space-x-12 text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] xl:text-[18rem]">
          <span
            className="inline-block relative font-extrabold text-red-400"
            ref={letterF}
          >
            M
          </span>
          <span
            ref={letterE}
            className="inline-block z-0 relative font-extrabold text-green-500"
          >
            O
          </span>
          <span
            ref={letterB}
            className="inline-block relative font-extrabold text-blue-400"
          >
            A
          </span>
          <span
            ref={letterA}
            className="inline-block relative font-extrabold text-purple-500"
          >
            L
          </span>
          <span
            ref={letterZ}
            className="inline-block relative font-extrabold text-sky-300"
          >
            D
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
