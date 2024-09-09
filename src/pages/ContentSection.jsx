import React from "react";
import { FaCheckCircle, FaPlay, FaUtensils } from "react-icons/fa";
import {
  FaUser,
  FaBell,
  FaCog,
  FaBook,
  FaHammer,
  FaShoppingCart,
} from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
const ContentSection = () => {
  return (
    <div className="">
      <header className="bg-white text-black h-16 flex justify-between items-center px-4 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-12 ml-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                <FaBook className="mr-2  mb-2" />
                <span>Learn</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                <FaUtensils className="mr-2 mb-2" />
                Feed
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                <FaHammer className="mr-2 mb-2" />
                Workshops
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 flex flex-col  items-center justify-center "
              >
                <FaShoppingCart className="mr-2 mb-2" />
                Store
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <FaUser className="text-2xl" />
          <FaBell className="text-2xl" />
          <FaCog className="text-2xl" />
        </div>
      </header>
      <section>
        <div class="container mx-auto px-72 py-8">
          <h1 class="text-3xl font-bold">Let's start learning, Ankit Raj</h1>
          <div class="flex items-center mt-4">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="border rounded-md pl-10 pr-4 py-2 w-full bg-gray-200"
                placeholder="Search by course name"
              />
            </div>
          </div>
          <div class="flex items-center mt-4">
            <button class="bg-white  border border-black px-4 py-1 rounded-2xl mr-2">
              All
            </button>
            <button class="bg-white  border px-4 py-1 rounded-2xl mr-2">
              In Progress
            </button>
            <button class="bg-white  border px-4 py-1 rounded-2xl mr-2">
              Completed
            </button>
            <button class="bg-white  border px-4 py-1 rounded-2xl mr-2">
              Expired
            </button>
            <div class="">
              <button class="bg-white  border px-4 py-1 rounded-2xl mr-2 flex justify-center items-center">
                Service
                <IoIosArrowDown className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class=" rounded-lg px-72 ">
        <div className="p-4 rounded-sm bg-gray-100 ">
          <div className="rounded-sm  bg-white max-w-[350px]">
            <div class="relative shadow-sm  max-w-[350px]">
              <img
                src="https://picsum.photos/200/300"
                alt="Course Thumbnail"
                class="w-full p-4  rounded-lg object-cover h-40"
              />
              <div class=" inset-0 bg-opacity-75 flex flex-col justify-end p-4 text-black ">
                <h3 class="text-lg font-semibold">
                  Master ChatGPT: Transform Your Life With AI Chatbots
                </h3>
                <p class="text-sm">Dhruv Rathee</p>
                <div class="progress mt-2">
                  <div
                    class="progress-bar bg-green-500 h-2"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    // style="width: 75%;"
                  ></div>
                </div>
                <button class="btn btn-primary mt-2 w-full bg-blue-500 text-center items-center text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  <h5 className="text-center items-center flex justify-center  ml-[36%]">
                    <span>Continue</span>
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContentSection;
