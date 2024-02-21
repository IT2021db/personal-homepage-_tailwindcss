import React from "react";

export const Content = ({ title, skills }) => {
    return (
        <>
            <section className=" mid:mt-20 mt-8 pb-8 pt-7 px-0 mid:pl-5 bg-sectionBackgroundColor pl-2.5">
                <h3 className="mid:text-3xl text-xs mid:mt-7 mt-4 font-black tracking-wider pb-3 border-b border-talesBorder text-headerTextColor">
                    {title}
                </h3>
                <ul className=" p-0 text-secondaryTextColor grid mid:grid-cols-3 grid-cols-1 gap-y-2 gap-x-8 list-none mid:text-lg text-xs">
                    {skills.map(skill => (
                        <li
                            className="before:content-['.'] h-8 mid:h-16 before:mid:pr-4 before:pr-2 before:text-blueElementColor before:align-[3px] before:text-7xl "
                            key={skill.id}>

                            {skill.content}
                        </li>
                    ))}

                </ul>
            </section>
        </>)
}
