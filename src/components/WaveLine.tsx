import { motion } from "framer-motion";

export default function WaveLine() {
  return (
    <div className="relative w-screen h-40 -mx-8">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full inset-0"
          style={{ top: `${i * 2}px` }}
        >
          <svg
            width="120%"
            height="40"
            preserveAspectRatio="none"
            className="-ml-[10%]"
          >
            <motion.path
              d="M 0 20 Q 150 -20, 300 20 T 600 20 T 900 20 T 1200 20"
              stroke="rgb(209 213 219)"
              strokeWidth="1"
              strokeOpacity={0.3}
              fill="transparent"
              animate={{
                d: [
                  "M 0 20 Q 150 -20, 300 20 T 600 20 T 900 20 T 1200 20",
                  "M 0 20 Q 150 60, 300 20 T 600 20 T 900 20 T 1200 20",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
