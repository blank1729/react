const SectionTwo = () => {
  return (
    <section className=" min-h-screen  bg-black flex items-center">
      <div className="px-8 grid md:grid-cols-2 items-center z-50">
        <div className="flex justify-center items-center">
          <img src="/vite.svg" alt="" className="w-1/2" />
        </div>
        <div className="mx-auto rounded-3xl p-6 lg:mx-20 lg:py-20 lg:px-10 sm:text-xl md:text-2xl lg:text-3xl text-lg bg-white bg-opacity-10 backdrop-blur-2xl saturate-50">
          Lorem{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            ipsum dolor sit
          </span>{" "}
          amet consectetur adipisicing elit. Laborum sit est, libero commodi a
          itaque nam quidem hic laudantium odio.
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
