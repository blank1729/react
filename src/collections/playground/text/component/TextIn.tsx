import { useLayoutEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

const TextIn = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const performAnimation = () => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        {
          opacity: 0.2,
          y: "120%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: Power2.easeOut,
        }
      );
    }
  };
  // we are supposed to use useLayoutEffect so that the animations won't be replayed on rerender
  // but since we want to replay the animations here we are using useEffect Instead
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      performAnimation();
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={textRef} className="overflow-y-hidden py-4">
        {text.split("").map((char, index) => (
          <span className="inline-block" key={index}>
            {char}
          </span>
        ))}
      </div>
      <button
        className="text-xl rounded-md border border-black px-2 py-1 
            duration-200 transition-transform ease-in-out active:scale-95
            flex gap-x-2 items-center"
        onClick={() => performAnimation()}
      >
        RePlay <ArrowPathRoundedSquareIcon className="w-5" />
      </button>
    </>
  );
};

export default TextIn;
