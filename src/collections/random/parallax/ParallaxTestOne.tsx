import HomeLink from "../../common/components/common/homelink";

const ParallaxTestOne = () => {
  return (
    <>
      <div className="h-screen bg-red-400"></div>
      <div
        className="h-screen flex justify-center items-center bg-blue-400 bg-fixed"
        style={{
          backgroundImage: "url('/imgs/foodsite/corn.svg')",
        }}
      >
        <p className="text-8xl font-extrabold text-white">something</p>
      </div>
      {/* <div className="h-screen bg-transparent"></div> */}
      <div className="h-screen bg-purple-400 z-50"></div>
      <div className="h-screen bg-green-400"></div>
      <HomeLink />
    </>
  );
};

export default ParallaxTestOne;
