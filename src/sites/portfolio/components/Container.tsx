import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
    px-2
    sm:px-4
    md:px-8
    lg:px-[10%]
    xl:px-[15%]
    "
    >
      {children}
    </div>
  );
};

export default Container;
