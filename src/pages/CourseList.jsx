import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses, likeCourse } from "../features/courses/coursesSlice";
import { useNavigate } from "react-router-dom";

function CourseList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm) ||
      course.instructor.toLowerCase().includes(searchTerm)
  );

  const handleDetails = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <section>
        <div className="container mx-auto px-4 py-8 md:px-16 lg:px-32">
          <h1 className="text-2xl md:text-3xl font-bold">
            Let's start learning, Dinesh Raj
          </h1>
          <div className="flex items-center mt-4">
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
                onChange={handleSearch}
                className="border rounded-md pl-10 pr-4 py-2 w-full bg-gray-200"
                placeholder="Search by course name or instructor"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-4 space-x-2">
            <button className="bg-white border border-black px-4 py-1 rounded-2xl">
              All
            </button>
            <button className="bg-white border px-4 py-1 rounded-2xl">
              In Progress
            </button>
            <button className="bg-white border px-4 py-1 rounded-2xl">
              Completed
            </button>
            <button className="bg-white border px-4 py-1 rounded-2xl">
              Expired
            </button>
            <div>
              <button className="bg-white border px-4 py-1 rounded-2xl flex justify-center items-center">
                Service
                <IoIosArrowDown className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-lg px-4 md:px-16 lg:px-32">
        <div className="p-4 rounded-sm bg-gray-100 flex justify-around flex-wrap">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="rounded-sm m-4 bg-white max-w-full sm:max-w-[300px] md:max-w-[350px] md:min-w-[350px] flex-1"
            >
              <div className="relative shadow-sm">
                <img
                  src={course?.thumbnail}
                  alt="Course Thumbnail"
                  className="w-full p-4 rounded-lg object-cover h-40"
                />
                <div className="inset-0 bg-opacity-75 flex flex-col justify-end p-4 text-black">
                  <h3 className="text-lg font-semibold">{course?.name}</h3>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                  <p className="text-sm">Likes: {course.likes}</p>
                  {/* <div className="progress mt-2">
                    <div
                      className="progress-bar bg-green-500 h-2"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "65%" }}
                    ></div>
                  </div> */}
                  <div className="mt-4 flex space-x-2 justify-between">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      onClick={() => dispatch(likeCourse(course._id))}
                    >
                      Like
                    </button>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => handleDetails(course._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CourseList;
