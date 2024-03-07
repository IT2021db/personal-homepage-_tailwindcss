import React, { useState, useEffect } from "react";
import { selectIsDark } from "../ThemeSwitcher/themeSwitcherSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectRepos, selectReposState } from "../homepageSlice";
import { fetchRepos } from "../homepageSlice";
import { Content } from "./Content";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const isDark = useSelector(selectIsDark);

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  const repos = useSelector(selectRepos);
  const status = useSelector(selectReposState);

  return (
    <section className="mid:mt-20 mt-12">
      <header className="text-center">
        <GithubIcon className="mid:h-12 mid:w-12 h-8 w-8 mb-2" />
        <header
          className={`mid:text-3xl text-2xl font-black tracking-wider ${isDark ? "text-white" : "text-headerTextColor"}`}
        >
          Portfolio{" "}
        </header>
        <h3
          className={`text-center font-normal mid:mt-2 mt-0${isDark ? "text-white" : "text-headerTextColor"} mid:text-xl text-lg mb-2 mid:mb-4`}
        >
          My recent projects{" "}
        </h3>
        <Content repos={repos} status={status} />
      </header>
    </section>
  );
};
