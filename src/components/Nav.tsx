import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const homeAni = {
    hidden: { x: 130, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: { delay: 0.5, duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };
  const aboutAni = {
    hidden: { x: 130, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  const eventAni = {
    hidden: { x: 130, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  const resAni = {
    hidden: { x: 130, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  const contactAni = {
    hidden: { x: 130, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  const navAni = {
    hidden: { width: 0 },
    visible: {
      width: 180,
      transition: {
        delay: 0.1,
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navAni}
        className="navContainer2"
      ></motion.div>
      <motion.div className="navContainer">
        <div className="navContainer_navList">
          <ul>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={homeAni}
              className="navContainer_navList-link"
            >
              <NavLink to="/">HOME</NavLink>
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={aboutAni}
              className="navContainer_navList-link"
            >
              ABOUT
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={eventAni}
              className="navContainer_navList-link"
            >
              EVENT
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={resAni}
              className="navContainer_navList-link"
            >
              RESOURCES
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={contactAni}
              className="navContainer_navList-link"
            >
              CONTACT
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
