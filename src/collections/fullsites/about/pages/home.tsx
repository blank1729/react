import { useState } from "react";
import background from "../assets/bg.jpg";
import nextImg from "../assets/next.png";
import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
// import Board from "../assets/board.png";

const Home = () => {
  const [left, setLeft] = useState(10);
  const [bgLeft, setBgLeft] = useState(0);

  const [src, setSrc] = useState(C1);

  const move = () => {
    const change = setInterval(() => {
      setSrc((prevSrc) => (prevSrc === C1 ? C2 : C1));
      setLeft((prevLeft) => prevLeft + 100 * (100 / 1000));
    }, 100);
    setTimeout(() => {
      clearInterval(change);
      setSrc(C1);
      setBgLeft((prevLeft) => prevLeft - 1920);
      setLeft(10);
      const mainElement = document.querySelector("main");
      if (mainElement) {
        const windowWidth = window.innerWidth;
        mainElement.scrollTo({
          left: windowWidth,
          behavior: "smooth",
        });
      }
    }, 1000);
    // console.log(left % 99);
    if (left >= 90) {
      // setLeft((prevLeft) => (prevLeft % 100) + 10);
    }
    console.log(document.querySelector("main")?.getBoundingClientRect().left);
  };
  return (
    <>
      <main
        className={`w-[200vw] h-screen relative
      transition-all duration-[400ms] ease-linear
      bg-repeat-x
      `}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `${bgLeft}px bottom`,
          backgroundSize: `auto 100%`,
        }}
      >
        {/* board */}
        <section className="w-screen h-screen flex flex-shrink-0 justify-center items-center ">
          <div className="bg-cover bg-no-repeat m-6 p-5 md:p-8 lg:p-10 rounded-md md:w-[40%] bg-[#f2d39c] border-[20px] border-[#f8a942]">
            <p className="text-5xl font-bold">Board 2</p>
            <p className="text-4xl">His name Maple, He will Show you around</p>
          </div>
        </section>

        {/* board */}
        <section className="w-screen h-screen flex flex-shrink-0 justify-center items-center ">
          <div className="bg-cover bg-no-repeat m-6 p-5 md:p-8 lg:p-10 rounded-md md:w-[40%] bg-[#f2d39c] border-[20px] border-[#f8a942]">
            <p className="text-5xl font-bold">Board 2</p>
            <p className="text-4xl">His name Maple, He will Show you around</p>
          </div>
        </section>
      </main>
      {/* character */}
      <img
        src={src}
        alt=""
        className="w-60 absolute lg:left-[20%] bottom-[10%] transition-all duration-300 ease-linear"
        style={{
          left: `${left}%`,
        }}
      />
      <button
        onClick={() => {
          // setLeft(left - 1000);
          move();
        }}
        className="transition-transform duration-150 active:scale-95 hover:scale-105 fixed bottom-0 right-0 m-20 w-16"
      >
        <img src={nextImg} alt="" />
      </button>
    </>
  );
};

export default Home;
