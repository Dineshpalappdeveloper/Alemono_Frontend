import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  markCourseAsCompleted,
  loadCompletedCourses,
} from "../features/courses/coursesSlice";

function StudentDashboard() {
  const dispatch = useDispatch();
  const { courses, completedCourses, loading, error } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(loadCompletedCourses());
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleComplete = (courseId) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
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
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: `${course.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            <button
              className={`mt-2 px-4 py-2 rounded-lg ${
                completedCourses.includes(course._id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={() =>
                !completedCourses.includes(course._id) &&
                handleComplete(course._id)
              }
              disabled={completedCourses.includes(course._id)}
            >
              {completedCourses.includes(course._id)
                ? "Completed"
                : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
