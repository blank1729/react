import { Link } from "react-router-dom";

export const FebaHome = () => {
  return (
    <>
      {/* main section */}
      <main className="w-screen">
        {/* home */}
        <section
          className="grid grid-cols-2 w-full bg-red-400 h-[calc(100vh-5rem)] max-h-[1000px]"
          id="section-one"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-3xl">Listen to the radio</h1>
          </div>

          {/* right part */}
          <div className="flex justify-center items-center">
            <h2 className="bg-white p-4 right">
              <p>
                <img src="/imgs/feba.png" alt="" />
              </p>
            </h2>
          </div>
        </section>

        {/* Section two */}
        <section id="section-two"></section>

        {/* Section three */}
        <section id="section-three"></section>

        {/* newsletter section */}
        <section
          className="flex justify-center items-center bg-violet-400 text-white"
          id="newsletter"
        >
          <div className="rounded-md w-full mx-[15%] p-[10%]">
            <h2 className="text-2xl font-semibold">Newsletter</h2>
            <p>Stay up to date about our Feba Online</p>
            <form className="grid">
              <input
                className="input"
                required
                placeholder="Name*"
                type="text"
                name="name"
                id="name"
              />
              <input
                className="input"
                required
                placeholder="Email*"
                type="email"
                name="email"
                id="email"
              />
              <button className="button bg-violet-500 mt-4">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-xl">
        <div className="grid grid-cols-5" id="footer-one">
          {/* addresss on left */}
          <div className="col-span-3">
            <div className="flex justify-center items-center"></div>
          </div>
          {/* links on right */}
          <div className="flex justify-center items-center py-20">
            <div className="grid">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About Us</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/podcast"}>Podcast</Link>
              <Link to={"/blog"}>Blog</Link>
            </div>
          </div>
        </div>
        {/* footer two */}
        <div id="footer-two"></div>
      </footer>
    </>
  );
};
