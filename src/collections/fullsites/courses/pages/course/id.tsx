import Navbar from "../../components/Navbar";

function course() {
  return (
    <>
      <Navbar />
      <main className="md:w-[70%] mx-auto w-full grid grid-cols-1 md:grid-cols-4 mt-5 md:gap-x-4">
        <div className="col-span-3">
          <h1 className="shadow-sm p-2 text-3xl font-bold rounded-sm text-center">
            Web Security CS 253
          </h1>
          <div className="flex space-x-2 my-4">
            <Tag tag="go" />
            <Tag tag="security" />
            <Tag tag="backend" />
          </div>
          <section className="mt-10 font-mono text-xl">
            <p>
              <b>CS 253</b> is one of my favorite courses and I really enjoyed
              the course. Except for one missing lecture everything else was
              awesome
            </p>
          </section>
        </div>
        <div className="mx-auto w-screen md:w-full">
          <h2 className="border shadow-sm p-2 text-lg rounded-sm text-center">
            CS 253
          </h2>
          <div id="sidebar-links">
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href="https://web.stanford.edu/class/cs253/"
              rel="noreferrer"
            >
              HOME
            </a>
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href="https://www.youtube.com/playlist?list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-"
              rel="noreferrer"
            >
              Lectures
            </a>
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href=""
            >
              Syllybus
            </a>
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href=""
            >
              Assignments
            </a>
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href=""
            >
              Projects
            </a>
            <a
              className="cursor-pointer block p-2 text-center hover:shadow-md"
              target={"_blank"}
              href=""
            >
              Discussion
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

function Tag(props: { tag: string }) {
  return <p className="px-1 bg-blue-300 rounded-sm">{props.tag}</p>;
}

export default course;
