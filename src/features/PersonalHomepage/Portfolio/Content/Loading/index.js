import { ReactComponent as Spinner } from "./spinner.svg";

export const Loading = () => (
    <div className="flex flex-col items-center justify-center">
        <p className="mb-6">Please wait, projects are being loaded...</p>
        <div className="mid:w-32 mid:h-32 w-12 h-12">
            <Spinner className="w-full h-full animate-spin" />
        </div>
    </div>
);
