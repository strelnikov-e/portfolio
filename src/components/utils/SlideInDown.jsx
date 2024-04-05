import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SlideInDown({ children,  duration = "0.5", delay = "0.25", margin = "0%"}) {
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
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
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
