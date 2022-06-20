import Container from "./components/Container";
import CoreValues from "./components/CoreValues";
import Projects from "./components/Projects";
import Me from "./assets/ingus.png";
import { motion } from "framer-motion";
import "tippy.js/dist/tippy.css";

const App = () => {
  const age = new Date().getFullYear() - new Date("2001-06-13").getFullYear();

  return (
    <Container>
      <motion.img
        initial={{ y: 10, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 1, easings: "easeInOut" }}
        className="rounded-full mb-2 border-4 border-gray-400"
        width="120px"
        height="120px"
        alt="Ingus Jansons"
        src={Me}
      />

      <motion.h1
        initial={{ y: 10, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-4xl font-bold"
      >
        Ingus Jansons
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-400"
      >
        TypeScript Engineer & Founder
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-sm mt-4"
      >
        {age} year-old from Rīga, Latvia. Living in the UK, leading and scaling
        Front-end Projects for businesses with enterpise requirements. I also
        dabble in building tools for content creators.
      </motion.p>

      <motion.h3
        initial={{ y: 10, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="uppercase text-xs text-gray-500 tracking-wider mt-4"
      >
        Core values
      </motion.h3>

      <CoreValues />

      <motion.hr
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 1, delay: 1.4 }}
        className="border-gray-800 my-6"
      />

      <Projects />
    </Container>
  );
};

export default App;
