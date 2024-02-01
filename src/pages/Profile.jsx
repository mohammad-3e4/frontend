import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

// import ProfileLayout from "../components/ProfileLayout";
const ProfileLayout = React.lazy(() => import("../components/ProfileLayout"));
const Table = React.lazy(() => import("../components/Table"));
export default function Profile() {
  const { data } = useSelector((state) => state.user.currentUser);
  const [allClass, setallClass] = useState(null);
  const [teachers, setAllTachers] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [teacher, setTeacher] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    subject: "OK",
  });
  const [selectedClass, setSelectedClass] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleCheckboxChange = (e,id, name, type) => {
    const isChecked = e.target.checked;
  
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [type]: isChecked ? id : '',
    }));
  
    if (isChecked) {
      console.log(`Subject ID: ${id} is checked`);
      handleAssignTeacher(id)
      fetchSubjects(selectedClass._id)
    } else if (id !=='') {
      console.log(`Subject ID: ${id} is unchecked`);
      handleRemoveAssignTeacher(id)
      fetchSubjects(selectedClass._id)
    }
 
  };
  const fetchSubjects = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/subjects/${id}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubjects(data.data);
      } else {
        setSubjects(null);
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchAllClass = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/class-levels",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setallClass(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/teachers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllTachers(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleTeacher = async (id) => {
    setShowModal(true);
    setCheckedItems({});
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/admins/teacher/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTeacher(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {}
  };
  const handleAssignTeacher = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/admin/assign-teacher`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
          body: JSON.stringify({
            teacherId: teacher._id,
            classId: selectedClass._id,
            subjectId: id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // setTeacher(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const handleRemoveAssignTeacher = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/admin/remove-teacher`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
          body: JSON.stringify({
            teacherId: teacher?._id,
            classId: selectedClass?._id,
            subjectId: id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const makeInchargeOfClass = async (classId, teacherId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/admin/make-incharge`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
          body: JSON.stringify({
            teacherId: teacherId,
            classId: classId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSelectedClass(data.classObj)
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const showClassDetails = async (id, indx) => {
    setSelected(indx);
    setShowDetails(true);
    fetchSubjects(id);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/class-levels/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSelectedClass(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


  useEffect(() => {
    fetchAllClass();
    fetchTeachers();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              All Classes
            </th>
          </tr>
        </thead>
        <tbody>
          {allClass ? (
            allClass.map((cls, index) => {
              return (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700"
                  key={cls._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <span className="text-gray-600 border-r border-gray-500 px-2">
                      {index + 1}.
                    </span>{" "}
                    {cls.name}
                  </th>
                </tr>
              );
            })
          ) : (
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                No allClass found
              </th>
            </tr>
          )}
        </tbody>
      </table>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 w-96 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="grid grid-cols-2">
                  <div className="border-r-2 ">
                    {allClass
                      ? allClass.map((clas, index) => (
                          <div className="flex items-center p-3" key={clas._id}>
                            <span
                              onClick={() => showClassDetails(clas._id, index)}
                              className={`text-xs p-3 text-white rounded cursor-pointer ${
                                selected === index
                                  ? "bg-emerald-600"
                                  : clas?.incharge === teacher?._id
                                  ? "bg-red-600"
                                  : "bg-slate-500 hover:bg-slate-400"
                              }`}
                            >
                              {clas.name}
                            </span>
                          </div>
                        ))
                      : ""}
                  </div>
                  {showDetails && (
                    <div>
                      <div className="flex items-center p-3 gap-2">
                        <input
                          type="checkbox"
                          id="incharge"
                          checked={selectedClass?.incharge === teacher?._id || false}
                          onChange={() => makeInchargeOfClass(selectedClass._id, teacher._id)}
                          className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="incharge"
                          id="incharge"
                          className=" text-red-700"
                        >
                          Incharge*
                        </label>
                      </div>
                      {subjects
                        ? subjects.map((subject, index) => (
                            <div
                              className="flex items-center p-3"
                              key={subject._id}
                            >
                              <input
                                type="checkbox"
                                id={`subject-${subject._id}`}
                                checked={
                                  checkedItems.subject === subject._id ||
                                  teacher?._id === subject?.teacher  || false
                                }
                                onChange={(e) =>
                                  handleCheckboxChange(e, subject._id, subject.name, "subject")
                                }
                                className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor={`subject-${subject._id}`}
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                {subjects[index].name}
                              </label>
                            </div>
                          ))
                        : ""}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
              
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              All Teachers
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers ? (
            teachers.map((teacher, index) => {
              return (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 "
                  key={teacher._id}
                >
                  <th
                    scope="row"
                    className="flex justify-between items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                  >
                    <span className="text-gray-600 border-r border-gray-500 px-2">
                      {index + 1}.
                    </span>{" "}
                    {teacher.name}
                    <button
                      onClick={() => handleTeacher(teacher._id)}
                      className="bg-slate-400 p-3 rounded text-white"
                    >
                      +
                    </button>
                  </th>
                </tr>
              );
            })
          ) : (
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                No allClass found
              </th>
            </tr>
          )}
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              All Subjects
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              English
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
