import { Link } from "react-router-dom";
import { buckets } from "./routes/buckets";
import HomeLink from "./collections/common/components/common/homelink";
import { Helmet } from "react-helmet";
import Icon from "./assets/icon.svg";

// here we are looping through the buckets from /constants/buckets
// looping over thes routes inside that again
function App() {
  return (
    <>
      <Helmet>
        <title>React Playground</title>
        <link rel="icon" href={Icon} type="image/svg" />
      </Helmet>
      <main className="min-h-screen p-4 md:p-4 bg-gradient-to-tl from-indigo-900 via-black to-slate-800 text-white space-y-6">
        <section className="lg:w-2/3 flex justify-start flex-col text-start px-1">
          <h2 className="text-3xl font-semibold py-2">My Playground</h2>
          <div className="text-xl">
            <p>Hi, I am blank</p>
            <p>
              Think of this website as my backyard for React related
              experiments. You can find the source <a href="">here</a>
            </p>
            <p>
              You can get back to this page by clicking the home button on the
              bottom right
            </p>
            <p>
              (it won't do much if you press it now since you are already here)
            </p>
          </div>
        </section>
        {buckets.map((bucket) => {
          return (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase">
                {bucket.name}
              </h2>
              <nav className="h-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {bucket.routes.map((route) => {
                  return (
                    <Link
                      className="duration-200 text-center rounded-md w-full h-32 flex justify-center items-center text-gray-950 text-3xl bg-blue-400 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:text-white hover:bg-gray-900 hover:border-2 border-blue-400 "
                      to={route.link}
                      key={route.link}
                    >
                      {route.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          );
        })}
        <HomeLink />
      </main>
    </>
  );
}

export default App;
