import React from "react";
import { motion } from "framer-motion";

export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedSection({ children, className = "", id, ...props }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionVariants}
      {...props}
    >
      {children}
    </motion.section>
  );
}


export function AnimatedItem({ children, className = "", as = "div", ...props }) {
  const Component = motion[as] || motion.div;
  return (
    <Component className={className} variants={childVariants} {...props}>
      {children}
    </Component>
  );
}

