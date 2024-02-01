import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Co_Schoolastic = () => {
  const dispacth = useDispatch();
  const biodata = useSelector((state) => state.studentData);
  const initialValues = {
    subject: "",
    pen_paper_term1_pt1: "",
    pen_paper_term1_pt2: "",
    pen_paper_term1_pt3: "",
    multiple_assessment_term1_pt1: "",
    multiple_assessment_term1_pt2: "",
    multiple_assessment_term1_pt3: "",
    best_of_two_term1: "",
    weightage_term1: "",
    portfoilo_term1: "",
    sub_enrich_act_term1: "",
    hly_exam_term1: "",

    pen_paper_term2_pt1: "",
    pen_paper_term2_pt2: "",
    pen_paper_term2_pt3: "",
    multiple_assessment_term2_pt1: "",
    multiple_assessment_term2_pt2: "",
    multiple_assessment_term2_pt3: "",
    best_of_two_term2: "",
    weightage_term2: "",
    portfoilo_term2: "",
    sub_enrich_act_term2: "",
    hly_exam_term2: "",
  };

  const validationSchema = Yup.object().shape({
    subject: Yup.string(),
    pen_paper_term1_pt1: Yup.string()
      .typeError("Please enter a valid number")
      .max(5, "Number must be 5 or less"),
    pen_paper_term1_pt2: Yup.string()
      .typeError("Please enter a valid number")
      .max(5, "Number must be 5 or less"),
    pen_paper_term1_pt3: Yup.string()
      .typeError("Please enter a valid number")
      .max(5, "Number must be 5 or less"),
    multiple_assessment_term1_pt1: Yup.string(),
    multiple_assessment_term1_pt2: Yup.string(),
    multiple_assessment_term1_pt3: Yup.string(),
    best_of_two_term1: Yup.string(),
    weightage_term1: Yup.string(),
    portfoilo_term1: Yup.string(),
    sub_enrich_act_term1: Yup.string(),
    hly_exam_term1: Yup.string(),

    pen_paper_term2_pt1: Yup.string(),
    pen_paper_term2_pt2: Yup.string(),
    pen_paper_term2_pt3: Yup.string(),
    multiple_assessment_term2_pt1: Yup.string(),
    multiple_assessment_term2_pt2: Yup.string(),
    multiple_assessment_term2_pt3: Yup.string(),
    best_of_two_term2: Yup.string(),
    weightage_term2: Yup.string(),
    portfoilo_term2: Yup.string(),
    sub_enrich_act_term2: Yup.string(),
    hly_exam_term2: Yup.string(),
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

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full  px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Co Schoolastic
              </h6>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="subject"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Select Subject
                  </label>
                  <select
                    id="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      formik.touched.drawing && formik.errors.drawing
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math</option>
                    <option value="EVS">EVS</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
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
                      defaultValue={biodata.bioData.addmission_number}
                      disabled
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
                      defaultValue={biodata.bioData.addmission_number}
                      disabled
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
                <div className="w-full lg:w-4/12 px-4">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    PT:1 
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt1"
                        >
                          Pen & Paper <span className="text-xs text-slate-600 normal-case">max val 5</span>
                        </label>
                        <input
                          id="pen_paper_term1_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt1 &&
                            formik.errors.pen_paper_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt1 &&
                        formik.errors.pen_paper_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt1}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term1_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="multiple_assessment_term1_pt1"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term1_pt1 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term1_pt1 &&
                            formik.errors.multiple_assessment_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term1_pt1 &&
                        formik.errors.multiple_assessment_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term1_pt1}
                          </p>
                        )}
                    </div>
                  
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    PT:2
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt1 &&
                            formik.errors.pen_paper_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt1 &&
                        formik.errors.pen_paper_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt1}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt1 &&
                            formik.errors.pen_paper_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt1 &&
                        formik.errors.pen_paper_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt1}
                          </p>
                        )}
                    </div>
                    
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    PT:3
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt1 &&
                            formik.errors.pen_paper_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt1 &&
                        formik.errors.pen_paper_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt1}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt1 &&
                            formik.errors.pen_paper_term1_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt1 &&
                        formik.errors.pen_paper_term1_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt1}
                          </p>
                        )}
                    </div>
                    
                  </div>
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
