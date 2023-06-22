import { NavLink } from "react-router-dom";
import "./Blog.css";

export function Blog() {
  return (
    <main className="bg-gray-500 min-h-[calc(100vh-5rem)]">
      {/* outer most container */}
      <div className="mx-[15%]">
        {/* heading */}
        <div className="w-full h-full py-8">
          <h1 className="text-center text-6xl font-serif ">Blog</h1>
        </div>
        {/* articles */}
        <section className="grid grid-cols-7 gap-y-2 ">
          <div className="list md:col-span-5">
            {/* card */}
            <div className="card grid gap-y-2 hover:shadow-md p-5 m-5 rounded-md">
              <div>
                {/* heading */}
                <NavLink to={"/linux-software"}>
                  <h2 className="article-link text-3xl font-bold">
                    A list of must have Linux software
                  </h2>
                </NavLink>
                <p className="description text-lg">
                  Don't get subjugated by the status quo effect, Choose the
                  software that will make your life easier
                </p>
              </div>

              <div className="flex gap-x-2">
                <p>
                  <i className="italic font-light">26 Apr 2023</i>
                </p>
                <div className="tags flex gap-x-2">
                  <NavLink to={"tag/linux"} className="tag">
                    #linux
                  </NavLink>
                  <NavLink to={"tag/software"} className="tag">
                    #software
                  </NavLink>
                  <NavLink to={"tag/awesome"} className="tag">
                    #awesome
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar"></div>
        </section>
      </div>
    </main>
  );
}
