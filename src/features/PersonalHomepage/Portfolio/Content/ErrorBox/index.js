import { ReactComponent as WarningIcon } from "./warning.svg";
import { ButtonLink } from "../../../ButtonLink/styled";
import { githubUsername } from "../../../githubUsername";

export const ErrorBox = () => (
    <article className="mid:mt-24 grid justify-items-center text-center mid:gap-8 text-headerTextColor mt-14 gap-6">
        < WarningIcon />
        <header className="mid:text-2xl font-bold text-base">Ooops! Something went&nbsp;wrong...</header>
        <p className=" m-0 mid:text-xl text-base leading-normal">
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </p>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer noopener"
        >
            Go to Github
        </ButtonLink>
    </article>

);