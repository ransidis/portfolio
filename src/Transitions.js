import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y:0, x:0 },
  animate: { opacity: 1,y:0, x:0  },
  exit: { opacity: 0,y:0, x:0  },
};

const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default Transitions;