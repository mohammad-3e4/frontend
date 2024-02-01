import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Co_Schoolastic = () => {
  const initialValues = {
    addmission_number: "",
    student_name: "",
    computer: "",
    drawing: "",
    gk: "",
    discipline_1: "",
    remarks_1: "",
    work_education: "",
    art_education: "",
    discipline_2: "",
    health_and_phe: "",
    remarks_2: "",
  };

  const validationSchema = Yup.object().shape({
    addmission_number: Yup.string().required("Admission number is required"),
    student_name: Yup.string().required("Student name is required"),

    computer: Yup.string().required("Computer grade is required"),
    drawing: Yup.string().required("Drawing grade is required"),
    gk: Yup.string().required("GK grade is required"),
    discipline_1: Yup.string().required("Discipline grade is required"),
    remarks_1: Yup.string().required("Remarks is required"),

    work_education: Yup.string().required("Work Education grade is required"),
    art_education: Yup.string().required("Art Education grade is required"),
    health_and_phe: Yup.string().required("Health & PHE grade is required"),
    discipline_2: Yup.string().required("Discipline grade is required"),
    remarks_2: Yup.string().required("Remarks is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/students/info",
          values
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  console.log(formik);
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full  px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Co Schoolastic
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form className="py-3" onSubmit={formik.handleSubmit}>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="addmission_number"
                    >
                      Addmission Number
                    </label>
                    <input
                      id="addmission_number"
                      type="text"
                      value={formik.values.addmission_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.addmission_number &&
                        formik.errors.addmission_number
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.addmission_number &&
                    formik.errors.addmission_number && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.addmission_number}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="student_name"
                    >
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="student_name"
                      value={formik.values.student_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.student_name &&
                        formik.errors.student_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.student_name &&
                    formik.errors.student_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.student_name}
                      </p>
                    )}
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                TERM:1
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="computer"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Computer
                    </label>
                    <select
                      id="computer"
                      value={formik.values.computer}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.computer && formik.errors.computer
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.computer && formik.errors.computer && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.computer}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="drawing"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Drawing
                    </label>
                    <select
                      id="drawing"
                      value={formik.values.drawing}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.drawing && formik.errors.drawing
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.drawing && formik.errors.drawing && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.drawing}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="gk"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      GK
                    </label>
                    <select
                      id="gk"
                      value={formik.values.gk}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.gk && formik.errors.gk
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.gk && formik.errors.gk && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.gk}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="discipline_1"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Discipline
                    </label>
                    <select
                      id="discipline_1"
                      value={formik.values.discipline_1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.discipline_1 &&
                        formik.errors.discipline_1
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.discipline_1 &&
                    formik.errors.discipline_1 && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.discipline_1}
                      </p>
                    )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300 pb-6" />
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="remarks_1"
                    >
                      Remarks
                    </label>
                    <textarea
                      value={formik.values.remarks_1}
                      onChange={formik.handleChange}
                      type="text"
                      id="remarks_1"
                      rows="4"
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.remarks_1 && formik.errors.remarks_1
                          ? "border-red-500"
                          : ""
                      }`}
                    ></textarea>
                  </div>
                  {formik.touched.remarks_1 && formik.errors.remarks_1 && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.remarks_1}
                    </p>
                  )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                TERM:2
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="work_education"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Work Education
                    </label>
                    <select
                      id="work_education"
                      value={formik.values.work_education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.work_education &&
                        formik.errors.work_education
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.work_education &&
                    formik.errors.work_education && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.work_education}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="art_education"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Art Education
                    </label>
                    <select
                      id="art_education"
                      value={formik.values.art_education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.art_education &&
                        formik.errors.art_education
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.art_education &&
                    formik.errors.art_education && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.art_education}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="health_and_phe"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Health And PHE
                    </label>
                    <select
                      id="health_and_phe"
                      value={formik.values.health_and_phe}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.health_and_phe &&
                        formik.errors.health_and_phe
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.health_and_phe &&
                    formik.errors.health_and_phe && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.health_and_phe}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="discipline_2"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Discipline
                    </label>
                    <select
                      id="discipline_2"
                      value={formik.values.discipline_2}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.discipline_2 &&
                        formik.errors.discipline_2
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  {formik.touched.discipline_2 &&
                    formik.errors.discipline_2 && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.discipline_2}
                      </p>
                    )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300 pb-6" />
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="remarks_2"
                    >
                      Remarks
                    </label>
                    <textarea
                      value={formik.values.remarks_2}
                      onChange={formik.handleChange}
                      type="text"
                      id="remarks_2"
                      rows="4"
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.remarks_2 && formik.errors.remarks_2
                          ? "border-red-500"
                          : ""
                      }`}
                    ></textarea>
                  </div>
                  {formik.touched.remarks_2 && formik.errors.remarks_2 && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.remarks_2}
                    </p>
                  )}
                </div>
              </div>

              <div className="mx-3 flex justify-end">
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Co_Schoolastic;
