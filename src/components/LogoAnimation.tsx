import { motion } from "framer-motion";
import udemy from "../assets/udemy.png";
import fiverr from "../assets/fiverr.png";
import elementor from "../assets/elementor.png";
import logitech from "../assets/logitech.png";
import oracle from "../assets/oracle.png";

const images = [
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];
const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 glass opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className=" h-8"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
