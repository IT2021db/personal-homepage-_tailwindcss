import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDark, toggleTheme } from "../ThemeSwitcher/themeSwitcherSlice";
import { email } from "../../../common/myEmail";
import envelope from "./envelope.svg";
import imgProfile from "./imgProfile.jpg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import '../../../index.css';

export const MainInformation = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);
    return (
        <header className="mt-[-30px] grid mid:grid-cols-[auto_1fr] grid-cols-1 mid:gap-16 gap-3 items-center  ">
            <img
                className="max-w-[398px] mid:w-30vw w-32 rounded-full mid:mb-16 mb-0"
                src={imgProfile}
                alt="Dorota Borowska"
            />
            <div>
                <div className={` uppercase font-bold text-xs${isDark ? 'text-white' : "text-secondaryTextColor"}`}>
                    This is
                </div>
                <h1 className={`font-black mid:text-4xl text-2xl mid:mt-3 mt-8 ${isDark ? "text-white" : "text-headerTextColor"}`}>
                    Dorota Borowska
                </h1>

                <p className={` md:text-xl text-base  mx-0 mid:my-8 my-4 leading-snug mid:max-w-2xl max-w-xl ${isDark ? "text-white" : "text-secondaryTextColor"}`}>
                    Hi there! I am a beginning Frontend Developer with a strong focus on
                    React. I thrive on new challenges in the workplace and enjoy discovering
                    new tools and solutions to improve my work. As a team player, I value
                    building strong relationships with my colleagues and believe in the
                    importance of mutual support, sensitivity, and empathy. Outside of
                    work, I enjoy staying active through sports, as well as taking time to
                    relax and enjoy nature.
                </p>
                <a
                    href={`mailto:${email}`}
                    title={email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blueElementColor text-white pl-4 pr-6 py-3 rounded font-semibold text-xl "
                >
                    <img src={envelope} alt="Email" className="p-2.5" />
                    Hire Me
                </a>
            </div>


        </header>

    );
};
