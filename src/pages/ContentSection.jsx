import React from "react";

const ContentSection = () => {
  return (
    <div className="">
      <header className="bg-white text-black h-16 flex justify-between items-center px-4 shadow-lg min-w-[97vw]">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-12 ml-4">
            <li>
              <a
                href="/"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default ContentSection;
