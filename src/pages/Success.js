import classes from "./Success.module.css";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Success = () => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className={classes.successSection}>
          <div className={classes.successText}>
            <h1>Thanks for your interest in Pixel Invite!</h1>
            <h2>We will respond back within 24 hours.</h2>
            <Link to="/">
              <Button title="Back to site" />
            </Link>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Success;
