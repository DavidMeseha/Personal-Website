import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageAnimationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        duration: 300,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
