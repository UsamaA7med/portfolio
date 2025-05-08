import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const stack = [
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={90} color="#38B2AC" />,
  },
  {
    name: "React",
    icon: <FaReact size={90} color="#61DAFB" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={90} color="#3178C6" />,
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs size={90} color="#3C873A" />,
  },
  {
    name: "Express",
    icon: <SiExpress size={90} color="#000000" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={90} color="#47A248" />,
  },
];
const Stack = () => {
  return (
    <section id="stack" className="py-15 glass">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl font-bold">My Stack</h1>
        <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stack.map((item) => (
            <div key={item.name} className="flex flex-col  items-center gap-2">
              <div className="flex rounded-2xl bg-white/10 p-6 flex-col items-center justify-center gap-2">
                {item.icon}
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
