import Navbar from "../../components/Navbar";

function index() {
  return (
    <>
      <Navbar />
      <main className="flex h-full">
        <div className="grid grid-cols-12">
          <div className="md:col-start-2 md:col-end-4">
            <h1 className="">This will be the main content</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default index;
