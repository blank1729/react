import { Link } from "react-router-dom";
import { buckets } from "./constants/buckets";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HomeTwo = () => {
  return (
    <>
      <main className="px-4 sm:px-6 md:px-10 lg:px-[20%] xl:px-[25%]">
        {buckets.map((bucket, index) => {
          return (
            <section className="my-4" key={index}>
              <h2 className="text-3xl my-1 font-semibold uppercase">
                {bucket.name}
              </h2>
              <hr className="my-2" />
              {bucket.routes.map((route) => {
                return (
                  <div>
                    <Link
                      to={route.link}
                      className="flex gap-x-1 text-xl py-1 transition-all hover:text-blue-600 duration-200 hover:translate-x-1"
                    >
                      {route.name}
                      <ArrowTopRightOnSquareIcon className="w-4" />
                    </Link>
                  </div>
                );
              })}
            </section>
          );
        })}
      </main>
    </>
  );
};

export default HomeTwo;
