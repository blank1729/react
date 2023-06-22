import TextIn from "./component/TextIn";
import HomeLink from "../../common/components/common/homelink";

const TextAnimation = () => {
  return (
    <>
      <main className="px-4 sm:px-8 md:px-12 lg:px-[20%] min-h-screen justify-center items-center">
        <h1 className="text-4xl font-semibold underline py-4">
          TEXT Animations and effects
        </h1>

        {/* Text reveal from Bottom */}
        <div className="border px-6 py-4 rounded-lg">
          <div className="flex gap-x-4 items-center">
            <h2 className="text-xl ">Text reveal from Bottom</h2>
          </div>
          <h3 className="text-6xl font-bold">
            <TextIn text="Something" />
          </h3>
        </div>
      </main>
      <HomeLink />
    </>
  );
};

export default TextAnimation;
