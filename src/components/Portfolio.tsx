import { useState } from "react";
import project1 from "/home/osama/cv projects/portfolio/src/assets/proj5.png";
import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { BsGithub } from "react-icons/bs";
import { CgVercel } from "react-icons/cg";

const projects = [
  {
    year: 2025,
    title: "Social App",
    description:
      "A social media app that allows users to connect with friends and family and share their thoughts and ideas.",
    src: project1,
    id: 1,
    alt: "project1",
    github: "https://github.com/UsamaA7med/socialApp-frontend",
    live: "https://social-app-frontend-tawny.vercel.app/",
  },
];
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);
  const [links, setLinks] = useState<{ github: string; live: string }>({
    github: project.github,
    live: project.live,
  });
  const color = useMotionValue(colors[0]);
  useState(() => {
    animate(color, colors, {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 10,
      repeatType: "mirror",
    });
  });
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%,${color})`;
  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white"
      style={{ backgroundImage }}
    >
      <div className="max-w-7xl  mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setProject(item);
                setLinks({ github: item.github, live: item.live });
              }}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{item.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300 ${
                  item.id === project.id ? "text-purple-200" : ""
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
        <div>
          <img
            src={project.src}
            alt={project.description}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
          <div className="mt-4 flex flex-col gap-5">
            <p className="text-gray-400 text-xl">Visit the selected project</p>
            <div className="flex gap-4">
              <a href={links.github}>
                <BsGithub size={32} />
              </a>
              <a href={links.live}>
                <CgVercel size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
