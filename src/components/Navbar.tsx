import { motion } from "motion/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
  {
    name: "Stack",
    path: "#stack",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="z-50 fixed flex justify-center  w-full text-white font-bold">
      <div className="border border-white/20 hidden max-w-[400px] mx-auto  backdrop-blur-3xl md:flex gap-10 items-center justify-center mt-8 rounded-3xl  p-2">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        whileTap={{ rotate: 360 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-50 md:hidden mt-8 px-4 py-2 absolute right-0 flex"
      >
        {isMenuOpen ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </motion.div>
      <div>
        {isMenuOpen && (
          <motion.ul
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-black/50  left-0 text-4xl items-center justify-center flex flex-col gap-10 w-full h-full"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 20 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={link.path}>{link.name}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
