import { motion } from "framer-motion";
import Links from "../components/Links";

function PortfolioOne() {
  return (
    <>
      <motion.div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-slate-800 to-sky-200">
        <motion.div
          initial={{ opacity: 0, bottom: 50 }}
          animate={{ opacity: 1, bottom: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
          }}
          className="flex justify-end px-4 md:px-10 w-screen h-screen"
        >
          {/* <button>change to right</button> */}
          <Links />
        </motion.div>

        {/* expanding circle */}
        <motion.div
          className="w-1 h-1 bg-red-400 rounded-full fixed bottom-0 right-0 translate-x-1/2 translate-y-1/2 hidden"
          exit={{ width: "500vh", height: "500vh", display: "block" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </>
  );
}

export default PortfolioOne;
