import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SlideInLeft({ children,  duration = "0.5", delay = "0.25", margin = "-10%"}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{position: "relative"}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
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
