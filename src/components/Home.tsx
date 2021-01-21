import React from "react";
import HomeContent from "./HomeContent";
import { motion } from "framer-motion";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="homeContainer">
        <motion.div
          initial={{ y: -180, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] },
          }}
          className="homeContainer_churchName"
        >
          <h1 className="primary-heading">Light</h1>
          <h1 className="primary-heading">Of The World</h1>
          <h4 className="fourth-heading">WORLD WIDE MINISTRIES - NAGA CITY</h4>
        </motion.div>
      </div>
      <HomeContent />
    </>
  );
};

export default Home;
