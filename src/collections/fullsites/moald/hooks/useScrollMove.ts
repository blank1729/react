import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

type Props = {
  initial: gsap.TweenVars;
  animate: gsap.TweenVars;
  ref: React.MutableRefObject<null>;
  root: React.MutableRefObject<null>;
  scrollOptions: ScrollTrigger.Vars;
};

const useScrollMove = ({
  initial,
  animate,
  ref,
  root,
  scrollOptions = {},
}: Props) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        element,
        {
          ...initial,
        },
        {
          ...animate,
          scrollTrigger: {
            trigger: root.current,
            ...scrollOptions,
          },
        }
      );
    }
    console.log("I ran");
  }, []);
};

export default useScrollMove;
