import React from "react";
import { useSelector } from "react-redux";
import { selectIsDark } from "../ThemeSwitcher/themeSwitcherSlice";
import { email } from "../../../common/myEmail";
import { linkedIn } from "../../../common//MyLinkedIn.js";
import { github } from "../../../common/myGithub";
import { ReactComponent as Github } from "./githubIcon.svg";

import { ReactComponent as LinkedIn } from "./linkedInIcon.svg";

export const Footer = () => {
  const isDark = useSelector(selectIsDark);
  return (
    <footer className="max-w-2xl h-96 mid:mt-32 mt-12">
      <h2
        className={`uppercase font-bold leading-tight mx-0 mid:mb-6 mb-0 mt-5 ${isDark ? "text-white" : "text-secondaryTextColor"} text-xs`}
      >
        Let's talk!
      </h2>
      <a
        className={`font-black mid:text-4xl leading-10 ${isDark ? "text-white" : "text-headerTextColor"}  no-underline m-0 text-2xl hover:text-blueElementColor`}
        href={`mailto:${email}`}
        title={email}
        target="_blank"
        rel="noopener norefereer"
      >
        {email}
      </a>
      <p
        className={`mid:text-xl leading-snug tracking-wider ${isDark ? "text-white" : "text-secondaryTextColor"}  mid:mt-6 mid:mb-11 mx-0 mt-3 mb-9 text-sm`}
      >
        I’m always open to the new chalenge. If you have a&nbsp;website,
        dashboard or mobile app in mind and need some help to&nbsp;make your
        ideas come to life, feel free to conatct me 😊
      </p>
      <div>
        <a
          className={`text- ${isDark ? "text-white" : "text-headerTextColor"} w-12 h-12 mr-6 mt-32 mb-5 ml-0 hover:text-blueElementColor`}
          href={github}
          title={github}
          target="_blank"
          rel="noopener norefereer"
        >
          <Github className="mid:h-12 mid:w-12 h-8 w-8" />
        </a>
        <a
          className={` w-12 h-12 mr-6 mt-32 mb-5 ml-0 ${isDark ? "text-white" : "text-headerTextColor"}  hover:text-blueElementColor`}
          href={linkedIn}
          title={linkedIn}
          target="_blank"
          rel="noopener norefereer"
        >
          <LinkedIn className="mid:h-12 mid:w-12 h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};
