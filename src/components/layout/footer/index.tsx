import * as React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row gap-2 flex-wrap w-full justify-center items-end p-4">
      <a href="https://github.com/DmitryVdovichencko">
        <AiOutlineGithub size="1.5em" />{" "}
      </a>
      <a href="https://twitter.com/Dimetrio89">
        <AiOutlineTwitter size="1.5em" />
      </a>
      <a href="https://twitter.com/Dimetrio89">
        <AiFillLinkedin size="1.5em" />
      </a>
      <a href="https://t.me/Dmitry_Vdovichenko">
        <FaTelegramPlane size="1.5em" />
      </a>
    </footer>
  );
};

export default Footer;
