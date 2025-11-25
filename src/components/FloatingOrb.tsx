import { motion } from "framer-motion";

interface FloatingOrbProps {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
}

export const FloatingOrb = ({
  size,
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 6,
}: FloatingOrbProps) => {
  return (
    <motion.div
      className="absolute rounded-full sphere-gradient"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
      }}
      initial={{ y: 0, x: 0 }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.8) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  );
};
