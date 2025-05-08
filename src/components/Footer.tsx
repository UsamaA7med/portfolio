import { BsGithub, BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container py-10 px-4 flex flex-col gap-5 md:flex-row items-center justify-between mx-auto">
      <div className="font-semibold">© 2025. All rights reserved.</div>
      <div className="flex gap-5">
        <a href="https://github.com/UsamaA7med">
          <BsGithub size={30} />
        </a>
        <a>
          <BsTwitterX size={30} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100067794009301">
          <FaFacebook size={30} />
        </a>
        <a>
          <BsInstagram size={30} />
        </a>
        <a>
          <BsTelegram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
