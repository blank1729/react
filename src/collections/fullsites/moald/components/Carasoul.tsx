import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

const Carasoul = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    console.log(
      -(imagesRef.current as unknown as HTMLDivElement).getBoundingClientRect()
        .left
    );
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imagesRef.current && sectionRef.current) {
        gsap.fromTo(
          imagesRef.current,
          {
            x: (
              imagesRef.current as unknown as HTMLDivElement
            ).getBoundingClientRect().left,
          },
          {
            x:
              -(imagesRef.current as unknown as HTMLDivElement).scrollWidth +
              document.documentElement.clientWidth,
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: sectionRef.current,
              scrub: true,
              start: "top top",
              end: "bottom top",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" min-h-screen bg-blue-400 flex items-center overflow-hidden"
    >
      <div className="">
        <div
          className="flex transition-transform duration-100 pointer-events-none gap-4"
          ref={imagesRef}
        >
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-a.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-b.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-e.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-f.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-a.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-b.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-e.png" alt="" />
          </div>
          <div className="bg-orange-200 p-2 flex-shrink-0">
            <img src="/imgs/moald/letter-f.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carasoul;
