export const Repositories = ({ repos }) => {
    const selectedFirstRepoName = "movies-browser-react";
    const selectedSecondRepoName = "todos-list-react-ts";
    const selectedFirstRepo = repos.find(repo => repo.name === selectedFirstRepoName);
    const selectedSecondRepo = repos.find(repo => repo.name === selectedSecondRepoName);
    const otherRepos = repos.filter(repo => repo.name !== selectedFirstRepoName && repo.name !== selectedSecondRepoName);
    const orderedRepos = [selectedFirstRepo, selectedSecondRepo, ...otherRepos];

    return (
        <ul className="grid mid:grid-cols-2 mid:gap-8 p-0 grid-cols-1 gap-4">
            {orderedRepos.map(repo => (
                <li
                    className="border-talesBorder bg-sectionBackgroundColor border-8 transition ease-linear duration-300 text-left mid:p-14 m-0 
                    text-base hover:border-talesBorderHover p-5"
                    key={repo.id} >
                    <h3 className="m-0 text-blueElementColor text-2xl">
                        {repo.name}</h3>
                    <p className="mid:m-6 leading-normal mid:text-base text-sm my-4 mx-0">
                        {repo.p}
                    </p>
                    <div className="my-4 mx-0 ">
                        Demo:
                        <a className="text-blueElementColor border-b border-blue-800 text-left my-0 mx-2"
                            href={`https://${repo.owner.login}.github.io/${repo.name}`}
                            target="_blank"
                            rel="noopener norefereer"
                        >
                            {`https://${repo.owner.login}.github.io/${repo.name}`}
                        </a>
                    </div>
                    <div className="my-4 mx-0 ">
                        Code:
                        <a className="text-blueElementColor border-b border-blue-800 text-left my-0 mx-2"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener norefereer"
                        >
                            {repo.html_url}
                        </a>
                    </div>
                </li >
            ))}
        </ul>
    );
};