import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

// import ProfileLayout from "../components/ProfileLayout";
const ProfileLayout = React.lazy(() => import("../components/ProfileLayout"));
const Table = React.lazy(() => import("../components/Table"));
export default function Dashboard() {
  const { teacher } = useSelector((state) => state.user.currentUser.data);
  const [subjects, setSubjects] = useState(null);
  const [classDetails, setClassDetails] = useState("");
  const [inchargeClass, setClass] = useState(null);
  const [show, setShow] = useState(false);

  const fetchSubjects = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/subjects-teacher/${teacher._id}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubjects(data.data);
      } else {
        setSubjects(null);
        console.error("Error:", await response.json());
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchClassDetails = async (classId) => {
    setShow(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/class-levels/${classId}`
      );
      const data = await response.json();

      setClassDetails(data.data);
    } catch (error) {
      console.error("Error fetching class details:", error);
      return null;
    }
  };

  const fetchInchargeClass = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/class-by-incharge/${teacher._id}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setClass(data.data);
      } else {
        setClass(null);
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchSubjects();
    // fetchClasses();
    fetchInchargeClass();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Subjects
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects ? (
              subjects.map((subject, index) => (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700 "
                  key={subject._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 flex justify-between items-center font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <span className="text-gray-600 border-r border-gray-500 px-2">
                      {index + 1}.
                    </span>{" "}
                    {subject.name}
                    <button
                      className="text-xs bg-slate-400 rounded-sm p-3"
                      onClick={() => fetchClassDetails(subject.classLevel)}
                    >
                      Check Class Details
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  No classes found
                </th>
              </tr>
            )}
          </tbody>
        </table>
        {show && (
          <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-slate-50">
            <div className="">
              <h2 className="font-bold uppercase px-5  pt-3 text-slate-600 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                {" "}
                Class : {classDetails?.name}
              </h2>
              <p className="text-xs font-semibold px-5 py-2">
                {classDetails?.description}
              </p>
              <hr></hr>
              <p className=" font-semibold px-5 py-3">
                <strong>Students:</strong>
                {classDetails?.students?.length}
              </p>
              <p className=" font-semibold px-5 py-3 ">
                <strong className="mr-3">Incharge:</strong>
                {classDetails?.incharge === teacher._id ? "true" : "false"}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <h2 className="font-bold uppercase px-5  pt-3 text-slate-600 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          {" "}
          Class : {inchargeClass?.name}
        </h2>
        <p className="text-xs font-semibold px-5 py-2">
          {inchargeClass?.description}
        </p>
        <hr></hr>
        <p className=" font-semibold px-5 py-3">
          <strong>Students:</strong>
          {inchargeClass?.students?.length}
        </p>
        <p className=" font-semibold px-5 py-3 ">
          <strong className="mr-3">Incharge:</strong>
          {inchargeClass?.incharge === teacher._id ? "true" : "false"}
        </p>
      </div>
    </>
  );
}
