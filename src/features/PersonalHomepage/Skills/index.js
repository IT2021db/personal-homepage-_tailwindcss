import React from "react";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { Content } from "./Content/index.js";

export const Skills = (skills, title) => (
    <>
        <Content title="My skills include 🛠️ " skills={skillset} />
        <Content title="What I want to learn next 🚀" skills={toLearn} />
    </>
);