import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-[#F5F8FF]">
      <header className="h-20  flex items-center justify-between pr-7 bg-white rounded-b-2xl">
        <a
          className="flex w-96  justify-center items-center h-20"
          href="/"
          data-discover="true"
        >
          <img
            alt=""
            className="w-[248px]"
            src="/images/sunset-rocks-logo.webp"
          />
        </a>
      </header>
      <div className="flex items-center justify-center text-center h-full flex-col min-h-[calc(100dvh-5rem)] py-8 px-4">
        <img src="/images/sunset-rocks-notfound.svg" alt="" />
        <p>
          The page you are trying to reach could no be found at the moment.
          <br />
          Please try again later.
        </p>
        <Link
          to="/"
          className="border border-[#F9298C] text-lg  font-medium py-4 px-8 bg-[#F9298C] text-white transition-colors cursor-pointer hover:bg-[#e0257e] mt-12"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
