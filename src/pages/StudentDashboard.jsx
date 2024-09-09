// src/pages/StudentDashboard.js

import React from "react";
import { useSelector } from "react-redux";

function StudentDashboard() {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Due Date: {course.dueDate}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: `${course.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Mark as Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
