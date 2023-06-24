import { motion } from "framer-motion";

const TransitionTwo = (Element: () => JSX.Element) => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
  ];

  return (
    <>
      <Element />
      {items.map((_, index) => {
        return (
          <motion.div
            id="slide-in"
            className={`fixed bg-black h-screen top-0 origin-bottom`}
            style={{
              width: `${100 / items.length}vw`,
              left: `${(100 * index) / items.length}vw`,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.07 * index,
            }}
          ></motion.div>
        );
      })}
      {items.map((_, index) => {
        return (
          <motion.div
            id="slide-in"
            className={`fixed bg-black h-screen top-0 origin-top`}
            style={{
              width: `${100 / items.length}vw`,
              left: `${(100 * index) / items.length}vw`,
            }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05 * index,
            }}
          ></motion.div>
        );
      })}
    </>
  );
};

export default TransitionTwo;
