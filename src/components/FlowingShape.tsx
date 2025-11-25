import { motion } from "framer-motion";

interface FlowingShapeProps {
  variant: "wave1" | "wave2" | "wave3";
  className?: string;
}

export const FlowingShape = ({ variant, className = "" }: FlowingShapeProps) => {
  const paths = {
    wave1: "M0,100 Q250,50 500,100 T1000,100 L1000,300 L0,300 Z",
    wave2: "M0,150 Q200,80 400,150 T800,150 L800,300 L0,300 Z",
    wave3: "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
  };

  return (
    <motion.svg
      className={`absolute ${className}`}
      style={{ opacity: 0.4 }}
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d={paths[variant]}
        fill="url(#blueGradient)"
        animate={{
          d: [paths[variant], paths[variant].replace(/100/g, "120"), paths[variant]],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(217, 91%, 45%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(217, 91%, 25%)" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
