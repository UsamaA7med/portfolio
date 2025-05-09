import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const About = () => {
  const color = useMotionValue(colors[0]);
  useEffect(() => {
    animate(color, colors, {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 10,
      repeatType: "mirror",
    });
  }, [color]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      id="about"
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <p className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </p>
        <h1 className="text-white/40 text-7xl font-black">Hi, I am </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl">
          Osama Ahmed
        </h1>
        <div>
          <img width={250} src="/profilepic.png" alt="profile image" />
        </div>
        <div className="flex justify-center shadow-xl bg-white/10 items-center gap-4 rounded-full px-4 py-2 ">
          {[...Array(3)].map((_, i) => (
            <img key={i + 1} src="/obj1.png" width={30} alt="object" />
          ))}
          <p className="font-medium">2+ Happy Clients</p>
        </div>
        <p className="my-6 max-w-xl text-2xl">Fullstack Developer</p>
        <a href="/cv.pdf" download>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit rounded-full items-center gap-3 px-6 py-2 cursor-pointer"
          >
            Download CV
            <FiArrowRight />
          </motion.button>
        </a>
      </div>
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};

export default About;
