import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { addSubjectInfo } from "../redux/student/studentSlice";
import { useDispatch, useSelector } from "react-redux";

const Co_Schoolastic = () => {
  const [maxTwoTerm1, setMaxTwoTerm1] = useState("");
  const [maxTwoTerm2, setMaxTwoTerm2] = useState("");
  const [subject, setSubject] = useState("");
  const dispacth = useDispatch();
  const biodata = useSelector((state) => state.studentData);
  const initialValues = {
    pen_paper_term1_pt1: "",
    pen_paper_term1_pt2: "",
    pen_paper_term1_pt3: "",
    multiple_assessment_term1_pt1: "",
    multiple_assessment_term1_pt2: "",
    multiple_assessment_term1_pt3: "",
    best_of_two_term1: 9.5,
    weightage_term1: 5.37,
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
    pen_paper_term1_pt1: Yup.string(),
    pen_paper_term1_pt2: Yup.string(),
    pen_paper_term1_pt3: Yup.string(),
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
      dispacth(addSubjectInfo({subject:subject,data:values}));
      // try {
      //   const response = await axios.post(
      //     "http://localhost:3000/api/v1/students/info",
      //     values
      //   );
      //   console.log(response.data);
      // } catch (error) {
      //   console.error("Error submitting form:", error);
      // }
    },
  });
  useEffect(() => {
    const calculateMaxSum = (
      pt1,
      multiple_assessment1,
      pt2,
      multiple_assessment2,
      pt3,
      multiple_assessment3
    ) => {
      const parseAndSum = (a, b) => Number(a) + Number(b);

      const sum1 = parseAndSum(pt1, multiple_assessment1);
      const sum2 = parseAndSum(pt2, multiple_assessment2);
      const sum3 = parseAndSum(pt3, multiple_assessment3);

      console.log(sum1, sum2, sum3);

      const maxSum = Math.max(sum1, sum2);
      const maxSum1 = Math.max(maxSum, sum3);

      if (sum1 > 0 && sum2 > 0 && sum3 > 0) {
        const maxSum = Math.max(sum1, sum2);
        const maxSum1 = Math.max(maxSum, sum3);
        console.log(maxSum, maxSum1);
        return maxSum + maxSum1;
      }

      return 0; // Or any default value you want to set
    };

    const maxTwoTerm1Value = calculateMaxSum(
      formik.values.pen_paper_term1_pt1,
      formik.values.multiple_assessment_term1_pt1,
      formik.values.pen_paper_term1_pt2,
      formik.values.multiple_assessment_term1_pt2,
      formik.values.pen_paper_term1_pt3,
      formik.values.multiple_assessment_term1_pt3
    );
    const maxTwoTerm2Value = calculateMaxSum(
      formik.values.pen_paper_term2_pt1,
      formik.values.multiple_assessment_term2_pt1,
      formik.values.pen_paper_term2_pt2,
      formik.values.multiple_assessment_term2_pt2,
      formik.values.pen_paper_term2_pt3,
      formik.values.multiple_assessment_term2_pt3
    );

    setMaxTwoTerm1(maxTwoTerm1Value);
    setMaxTwoTerm2(maxTwoTerm2Value);
  }, [formik.values]);

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
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
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
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                    PT:1{" "}
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
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
                          htmlFor="multiple_assessment_term1_pt1"
                        >
                          Multiple Assesment
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
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                    PT:2
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt2"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt2"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt2 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt2
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt2 &&
                            formik.errors.pen_paper_term1_pt2
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt2 &&
                        formik.errors.pen_paper_term1_pt2 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt2}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term1_pt2"
                        >
                          Multiple Assesment
                        </label>
                        <input
                          id="multiple_assessment_term1_pt2"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term1_pt2 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term1_pt2
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term1_pt2 &&
                            formik.errors.multiple_assessment_term1_pt2
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term1_pt2 &&
                        formik.errors.multiple_assessment_term1_pt2 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term1_pt2}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                    PT:3{" "}
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term1_pt3"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term1_pt3"
                          type="number"
                          value={
                            formik.values.pen_paper_term1_pt3 >= 5
                              ? 5
                              : formik.values.pen_paper_term1_pt3
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term1_pt3 &&
                            formik.errors.pen_paper_term1_pt3
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term1_pt3 &&
                        formik.errors.pen_paper_term1_pt3 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt3}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term1_pt3"
                        >
                          Multiple Assesment
                        </label>
                        <input
                          id="multiple_assessment_term1_pt3"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term1_pt3 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term1_pt3
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term1_pt3 &&
                            formik.errors.multiple_assessment_term1_pt3
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term1_pt3 &&
                        formik.errors.multiple_assessment_term1_pt3 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term1_pt3}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap py-3 px-4">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="best_of_two_term1"
                    >
                      Best of two
                    </label>
                    <input
                      id="best_of_two_term1"
                      type="number"
                      value={maxTwoTerm1}
                      disabled
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.best_of_two_term1 &&
                        formik.errors.best_of_two_term1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="weightage_term1"
                    >
                      weightage
                    </label>
                    <input
                      id="weightage_term1"
                      type="text"
                      value={formik.values.weightage_term1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.weightage_term1 &&
                        formik.errors.weightage_term1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap py-3 px-4">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="portfoilo_term1"
                    >
                      portfolio
                    </label>
                    <input
                      id="portfoilo_term1"
                      type="number"
                      value={
                        formik.values.portfoilo_term1 >= 5
                          ? 5
                          : formik.values.portfoilo_term1
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.portfoilo_term1 &&
                        formik.errors.portfoilo_term1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="sub_enrich_act_term1"
                    >
                      Sub Enrich Act
                    </label>
                    <input
                      id="sub_enrich_act_term1"
                      type="number"
                      value={
                        formik.values.sub_enrich_act_term1 >= 5
                          ? 5
                          : formik.values.sub_enrich_act_term1
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.sub_enrich_act_term1 &&
                        formik.errors.sub_enrich_act_term1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="hly_exam_term1"
                    >
                      Half Yearly exam
                    </label>
                    <input
                      id="hly_exam_term1"
                      type="number"
                      value={formik.values.hly_exam_term1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.hly_exam_term1 &&
                        formik.errors.hly_exam_term1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300 pb-6" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                TERM:2
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold text-center uppercase">
                    PT:1{" "}
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term2_pt1"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term2_pt1"
                          type="number"
                          value={
                            formik.values.pen_paper_term2_pt1 >= 5
                              ? 5
                              : formik.values.pen_paper_term2_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term2_pt1 &&
                            formik.errors.pen_paper_term2_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term2_pt1 &&
                        formik.errors.pen_paper_term2_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term2_pt1}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term2_pt1"
                        >
                          Multiple Assesment
                        </label>
                        <input
                          id="multiple_assessment_term2_pt1"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term2_pt1 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term2_pt1
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term2_pt1 &&
                            formik.errors.multiple_assessment_term2_pt1
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term2_pt1 &&
                        formik.errors.multiple_assessment_term2_pt1 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term2_pt1}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                    PT:2
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term2_pt2"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term2_pt2"
                          type="number"
                          value={
                            formik.values.pen_paper_term2_pt2 >= 5
                              ? 5
                              : formik.values.pen_paper_term2_pt2
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term2_pt2 &&
                            formik.errors.pen_paper_term2_pt2
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term2_pt2 &&
                        formik.errors.pen_paper_term2_pt2 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term1_pt2}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term2_pt2"
                        >
                          Multiple Assesment
                        </label>
                        <input
                          id="multiple_assessment_term2_pt2"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term2_pt2 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term2_pt2
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term2_pt2 &&
                            formik.errors.multiple_assessment_term2_pt2
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term2_pt2 &&
                        formik.errors.multiple_assessment_term2_pt2 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term2_pt2}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                    PT:3{" "}
                    <span className="text-[10px] text-slate-600 normal-case">
                      max(5)
                    </span>
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="pen_paper_term2_pt3"
                        >
                          Pen & Paper
                        </label>
                        <input
                          id="pen_paper_term2_pt3"
                          type="number"
                          value={
                            formik.values.pen_paper_term2_pt3 >= 5
                              ? 5
                              : formik.values.pen_paper_term2_pt3
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.pen_paper_term2_pt3 &&
                            formik.errors.pen_paper_term2_pt3
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.pen_paper_term2_pt3 &&
                        formik.errors.pen_paper_term2_pt3 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.pen_paper_term2_pt3}
                          </p>
                        )}
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="multiple_assessment_term2_pt3"
                        >
                          Multiple Assesment
                        </label>
                        <input
                          id="multiple_assessment_term2_pt3"
                          type="number"
                          value={
                            formik.values.multiple_assessment_term2_pt3 >= 5
                              ? 5
                              : formik.values.multiple_assessment_term2_pt3
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                            formik.touched.multiple_assessment_term2_pt3 &&
                            formik.errors.multiple_assessment_term2_pt3
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {formik.touched.multiple_assessment_term2_pt3 &&
                        formik.errors.multiple_assessment_term2_pt3 && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.multiple_assessment_term2_pt3}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap py-3 px-4">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="best_of_two_term2"
                    >
                      Best of two
                    </label>
                    <input
                      id="best_of_two_term2"
                      type="text"
                      value={maxTwoTerm2}
                      disabled
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.best_of_two_term2 &&
                        formik.errors.best_of_two_term2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="weightage_term2"
                    >
                      weightage
                    </label>
                    <input
                      id="weightage_term2"
                      type="text"
                      
                      value={formik.values.weightage_term2}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.weightage_term2 &&
                        formik.errors.weightage_term2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap py-3 px-4">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="portfoilo_term2"
                    >
                      portfolio
                    </label>
                    <input
                      id="portfoilo_term2"
                      type="number"
                      value={
                        formik.values.portfoilo_term2 >= 5
                          ? 5
                          : formik.values.portfoilo_term2
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.portfoilo_term2 &&
                        formik.errors.portfoilo_term2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="sub_enrich_act_term2"
                    >
                      Sub Enrich Act
                    </label>
                    <input
                      id="sub_enrich_act_term2"
                      type="number"
                      value={
                        formik.values.sub_enrich_act_term2 >= 5
                          ? 5
                          : formik.values.sub_enrich_act_term2
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.sub_enrich_act_term2 &&
                        formik.errors.sub_enrich_act_term2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="hly_exam_term2"
                    >
                      Half Yearly exam
                    </label>
                    <input
                      id="hly_exam_term2"
                      type="number"
                      value={formik.values.hly_exam_term2}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.hly_exam_term2 &&
                        formik.errors.hly_exam_term2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
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
