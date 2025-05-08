import { useState } from "react";
import project1 from "/home/osama/cv projects/portfolio/src/assets/proj5.png";
import project2 from "/home/osama/cv projects/portfolio/src/assets/proj6.png";
import project3 from "/home/osama/cv projects/portfolio/src/assets/proj7.png";
import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

const projects = [
  {
    year: 2023,
    title: "Doodle - customer support chatbot",
    description: "A chatbot that answers customer queries.",
    src: project1,
    id: 1,
    alt: "project1",
  },
  {
    year: 2023,
    title: "Doodle - customer support chatbot",
    description: "A chatbot that answers customer queries.",
    src: project2,
    id: 2,
    alt: "project2",
  },
  {
    year: 2023,
    title: "Doodle - customer support chatbot",
    description: "A chatbot that answers customer queries.",
    src: project3,
    id: 3,
    alt: "project3",
  },
];
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);
  const color = useMotionValue(colors[0]);
  useState(() => {
    animate(color, colors, {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 10,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%,${color})`;
  return (
    <motion.section
      id="portfolio"
      className="py-32   text-white"
      style={{ backgroundImage }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => setProject(item)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{item.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${
                  item.id === project.id ? "text-gray-200" : ""
                }`}
              >
                {item.title}
              </h3>
              {item.id === project.id && (
                <p className="border-b-2 border-gray-200 my-4 transition-all duration-500 ease-in-out">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <img
          src={project.src}
          alt={project.description}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};

export default Portfolio;
