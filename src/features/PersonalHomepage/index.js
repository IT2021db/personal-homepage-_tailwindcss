import React from "react";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import {Footer}from "./Footer";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const PersonalHomepage = () => (
    <div className="container mx-auto mid:p-4 p-3.5 mid:mt-5 mt-2.5">
        <ThemeSwitcher />
        <MainInformation />
        <Skills />
        <Portfolio />
        <Footer/>
    </div>

);