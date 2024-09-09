// src/pages/CourseDetails.js

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course._id === id)
  );

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Description:</strong> {course.description}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Status:</strong> {course.enrollmentStatus}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Location:</strong> {course.location}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Prerequisites:</strong> {course.prerequisites.join(", ")}
      </p>
      <details className="mt-4">
        <summary className="cursor-pointer text-lg font-semibold text-blue-600">
          Syllabus
        </summary>
        <div className="mt-2">
          {course.syllabus.map((item, index) => (
            <div key={index} className="mb-2">
              <h4 className="text-md font-semibold">
                Week {item.week}: {item.topic}
              </h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export default CourseDetails;
