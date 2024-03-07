import { useDispatch, useSelector } from "react-redux";

import { selectIsDark, toggleTheme } from "./themeSwitcherSlice";
import { ReactComponent as SunIcon } from "./brightness.svg";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDark);

  return (
    <div
      className="flex justify-end items-center"
      onClick={() => dispatch(toggleTheme())}
    >
      <p className="text-xs font-bold uppercase hidden mid:inline  ">
        DARK MODE {isDark ? "on" : "off"}{" "}
      </p>
      <span
        className={` border border-solid ${isDark ? "border-darkSwitcherBorder bg-darkSwitcherBackground" : "border-switcherBorder bg-switcherBackground"} rounded-2xl ml-4 w-12 p-0.5 flex items-center`}
      >
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center  ${isDark ? "translate-x-5 bg-white" : "bg-secondaryTextColor"}`}
        >
          <SunIcon
            className={`${isDark ? "text-black bg-white" : "text-white bg-secondaryTextColor"}`}
          />
        </span>
      </span>
    </div>
  );
};
