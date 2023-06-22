/* eslint-disable @next/next/no-img-element */

import Navbar from "../../components/Navbar";

function index() {
  return (
    <>
      <Navbar />
      <main className="mt-4 mx-10">
        <section className="grid grid-cols-6 gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default index;

function Card() {
  return (
    <div className="rounded border inline-block">
      <a href="">
        <img
          src="https://i.ytimg.com/vi/5JJrJGZ_LjM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGuQ68XSFS1chQXCv6m5ftmnifSw"
          alt=""
        />
      </a>
      <div>
        <h5>CS 253</h5>
        <p>A course on web security</p>
      </div>
    </div>
  );
}
