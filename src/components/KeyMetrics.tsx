import { useInView, motion } from "motion/react";
import { useRef } from "react";

const metrics = [
  {
    id: 1,
    value: "0",
    lable: "Years of experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 2,
    value: "+2",
    lable: "Projects completed",
    description: "From small applications to complex web apps.",
  },
  {
    id: 3,
    value: "6+",
    lable: "technologies knowledge",
    description: "proficient in a wide range of programming languages.",
  },
  {
    id: 4,
    value: "90%",
    lable: "code quality",
    description: "Maintaining a high level of code quality.",
  },
  {
    id: 5,
    value: "100+",
    lable: "commits on Github",
    description:
      "active contributor to open-source and personal projects on Github.",
  },
];
const KeyMetrics = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className=" py-32 px-4 text-white glass"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-bold mb-12"
        >
          KEY METRICS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInViewport ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  delay: 0.6 * idx * 0.1,
                  duration: 0.4,
                  type: "spring",
                }}
                className="text-4xl font-bold text-purple-300 mb-2"
              >
                {item.value}
              </motion.h3>
              <p className="text-gray-400">{item.lable}</p>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default KeyMetrics;
