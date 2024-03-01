import React from "react";
import { useSelector } from "react-redux";
import { selectIsDark } from "../../ThemeSwitcher/themeSwitcherSlice";


export const Content = ({ title, skills }) => {
    const isDark = useSelector(selectIsDark);

    return (
        <>
            <section className={`mid:mt-20 mt-8 pb-14 pt-7 px-0 mid:pl-5 ${isDark ? " bg-darkSectionBackgroundColor" : "bg-sectionBackgroundColor"}  pl-2.5`}>
                <h3 className={`mid:text-3xl text-xs mid:mt-7 mt-4 font-black tracking-wider pb-3 border-b ${isDark ? "text-white" : "text-headerTextColor"} border-talesBorder`}>
                    {title}
                </h3>
                <ul className={`p-0 ${isDark ? " text-white" : "text-secondaryTextColor"}  grid mid:grid-cols-3 grid-cols-1 gap-y-2 gap-x-8 list-none mid:text-lg text-xs`}>
                    {skills.map(skill => (
                        <li
                            className="before:content-['.'] h-8 mid:h-16 before:mid:pr-4 before:pr-2 before:text-blueElementColor before:mid:align-[3px] before:align-[1px] before:text-7xl "
                            key={skill.id}>

                            {skill.content}
                        </li>
                    ))}

                </ul>
            </section>
        </>)
}
