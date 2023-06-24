import { motion } from "framer-motion";

const Transition = (Element: () => JSX.Element) => {
  return (
    <>
      <Element />
      <motion.div
        id="slide-in"
        className="fixed w-screen bg-black h-screen left-0 top-0 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        id="slide-out"
        className="fixed w-screen bg-black h-screen left-0 top-0 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
