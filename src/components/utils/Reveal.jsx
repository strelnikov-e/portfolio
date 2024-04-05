import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Reveal({ children, width = "fit-content", margin = "0%", duration = "0.5", delay = "0.25"}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ }}>
      <motion.div
        variants={{
          hidden: { opacity: 0},
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
