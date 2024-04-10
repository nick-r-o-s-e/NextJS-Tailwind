import LinkArrowBtn from "./components/Buttons/LinkArrowBtn";

function NotFound() {
  return (
    <div className="w-full justify-center items-center mt-32 flex flex-col gap-6">
      <div className="dark:text-white flex justify-center ">
        <h1 className="inline-block text-4xl font-medium align-top leading-[49px] ml-0 mr-5 my-0 pl-0 pr-[23px] py-0 dark:border-r-[rgb(255,255,255)] border-r-[rgba(0,0,0,0.3)] border-r border-solid">
          404
        </h1>

        <div className="display: inline-block;">
          <h2 className="inline-block text-lg font-semibold leading-[49px] m-0;">
            This page could not be found.
          </h2>
        </div>
      </div>

      <LinkArrowBtn text="Return Home" href="/" />
    </div>
  );
}

export default NotFound;
