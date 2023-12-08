import Image from "next/image";

const AppDownloadPrompt = () => {
  return (
    <div className="bg-white h-[40px] flex justify-center">
      <div className="text-[12px] flex justify-center items-center h-full max-w-[1024px] w-[90%] relative font-medium">
        <p className="flex">
          Download the Laniakea Store app available both on android and ios.{" "}
          <span className="flex text-primaryRegular">
            &nbsp;Download the App now.{" "}
            {/* <Image
              src="/images/go-to-link.svg"
              height="12"
              width="12"
              alt="go to link"
              className=""
            /> */}
          </span>
        </p>
        <Image
          className="absolute right-4 cursor-pointer"
          src="/images/close.svg"
          height="24"
          width="24"
          alt="close"
        />
      </div>
    </div>
  );
};

export default AppDownloadPrompt;
