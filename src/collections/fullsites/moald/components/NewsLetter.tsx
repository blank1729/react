const NewsLetter = () => {
  return (
    <section className="h-[80vh] bg-black relative p-4 lg:p-8 lg:px-6 flex items-center justify-center">
      <div className="relative w-full h-full flex justify-center items-center flex-col flex-grow rounded-lg bg-white bg-opacity-5 backdrop-blur-xl saturate-100 z-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          action="/api/newsletter"
          method="post"
          className="grid gap-y-4 items-center"
        >
          <h2 className="text-white text-3xl pb-4 text-center">
            Receive Updates from MOALD
          </h2>
          <input
            type="email"
            className="text-2xl max-w-sm mx-auto bg-black outline-white border border-gray-200 duration-200 transition-all px-4 p-2 rounded-md"
          />
          <button className="max-w-sm mx-auto border-gray-400 hover:border-white border-2 duration-200 transition-colors rounded-md px-4 py-2">
            Receive Updates
          </button>
        </form>
      </div>
      <div className="absolute w-40 h-40 bg-orange-400 left-[20%] rotate-12 top-[30%]"></div>
      <div className="absolute w-40 h-40 bg-pink-400 left-[60%] rotate-12 top-[60%] rounded-full"></div>
      <div className="w-0 h-0 rotate-45 absolute border-t-[10rem] border-l-[5rem] border-r-[5rem] left-[80%] top-[20%] border-transparent border-solid border-t-red-500"></div>
    </section>
  );
};

export default NewsLetter;
