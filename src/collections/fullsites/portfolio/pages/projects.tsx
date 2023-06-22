import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Porjects = () => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      className="bg-red-400 w-screen h-screen"
    >
      <motion.h1
        className="text-7xl relative font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        <p>PROJECTS</p>
        <Link to={"/portfolio/one"}>Home</Link>
      </motion.h1>
    </motion.div>
  );
};

export default Porjects;
