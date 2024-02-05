import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBioData } from "../redux/student/studentSlice";
const BioData = () => {
  const dispatch = useDispatch();
  const initialValues = {
    admission_number: "",
    student_name: "",
    date_of_birth: "",
    gurdian_name: "",
    mother_name: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    zip_code: "",
    attendance_term_1: "",
    max_meeting_term_1: "",
    attendance_term_2: "",
    max_meeting_term_2: "",
    weight: "",
    height: "",
    vision_l: "",
    vision_r: "",
    admin_category: "",
    reservation_category: "",
    sgc: "",
    bpl: "",
    diffrently_abled: "",
    teacher_ward: "",
    religion: "",
    quota: "",
    date_of_admission: "",
    tc_issued: "",
    remarks: "",
  };

  const validationSchema = Yup.object().shape({
    admission_number: Yup.string().required("BioData number is required"),
    student_name: Yup.string().required("Student name is required"),
    date_of_birth: Yup.date().required("Date of birth is required"),
    gurdian_name: Yup.string().required("Guardian name is required"),
    mother_name: Yup.string().required("Mother name is required"),
    phone: Yup.string(),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    zip_code: Yup.string(),
    attendance_term_1: Yup.number(),
    max_meeting_term_1: Yup.number(),
    attendance_term_2: Yup.number(),
    max_meeting_term_2: Yup.number(),
    weight: Yup.number(),
    height: Yup.number(),
    vision_l: Yup.number(),
    vision_r: Yup.number(),
    admin_category: Yup.string(),
    reservation_category: Yup.string(),
    sgc: Yup.string(),
    bpl: Yup.string(),
    diffrently_abled: Yup.string(),
    teacher_ward: Yup.string(),
    religion: Yup.string(),
    quota: Yup.string(),
    date_of_admission: Yup.date(),
    tc_issued: Yup.string(),
    remarks: Yup.string(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(addBioData(values));
      try {
        const response = await axios.post(
          "http://localhost:8000/api/bio-data",
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
                Student Information
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form className="py-3" onSubmit={formik.handleSubmit}>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="admission_number"
                    >
                      Addmission Number
                    </label>
                    <input
                      id="admission_number"
                      type="text"
                      value={formik.values.admission_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.admission_number &&
                        formik.errors.admission_number
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.admission_number &&
                    formik.errors.admission_number && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.admission_number}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
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
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="date_of_birth"
                    >
                      Date Of birth
                    </label>
                    <input
                      id="date_of_birth"
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date_of_birth}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.date_of_birth && formik.errors.date_of_birth
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.date_of_birth && formik.errors.date_of_birth && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.date_of_birth}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="gurdian_name"
                    >
                      father name / guardian name
                    </label>
                    <input
                      type="text"
                      id="gurdian_name"
                      value={formik.values.gurdian_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.gurdian_name &&
                        formik.errors.gurdian_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.gurdian_name &&
                    formik.errors.gurdian_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.gurdian_name}
                      </p>
                    )}
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="mother_name"
                    >
                      Mother name
                    </label>
                    <input
                      type="text"
                      id="mother_name"
                      value={formik.values.mother_name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.mother_name && formik.errors.mother_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.mother_name && formik.errors.mother_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.mother_name}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="phone"
                    >
                      phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="gender"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Select gender
                    </label>
                    <select
                      id="gender"
                      value={formik.values.gender}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.gender && formik.errors.gender
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option selected>choose a gender</option>
                      <option value="F">Female</option>
                      <option value="M">Male</option>
                      <option value="O">Others</option>
                    </select>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.gender}
                    </p>
                  )}
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="zip_code"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      id="zip_code"
                      value={formik.values.zip_code}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                ATTENDANCE (TERM:1)
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="attendance_term_1"
                    >
                      ATTENDED
                    </label>
                    <input
                      id="attendance_term_1"
                      type="number"
                      value={formik.values.attendance_term_1}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="max_meeting_term_1"
                    >
                      MAX. MEETINGS
                    </label>
                    <input
                      type="number"
                      id="max_meeting_term_1"
                      value={formik.values.max_meeting_term_1}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                ATTENDANCE (TERM:2)
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="attendance_term_2"
                    >
                      ATTENDED
                    </label>
                    <input
                      id="attendance_term_2"
                      type="number"
                      value={formik.values.attendance_term_2}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="max_meeting_term_2"
                    >
                      MAX. MEETINGS
                    </label>
                    <input
                      type="number"
                      id="max_meeting_term_2"
                      value={formik.values.max_meeting_term_2}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Health
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="weight"
                    >
                      weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="height"
                    >
                      height
                    </label>
                    <input
                      type="number"
                      id="height"
                      value={formik.values.height}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="vision_l"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      L Vision
                    </label>
                    <input
                      type="number"
                      id="vision_l"
                      value={formik.values.vision_l}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="vision_r"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      R Vision
                    </label>
                    <input
                      type="number"
                      id="vision_r"
                      value={formik.values.vision_r}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Other Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="admin_category"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Admin catgory
                    </label>
                    <select
                      id="admin_category"
                      value={formik.values.admin_category}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a category</option>
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="reservation_category"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Reserve Category
                    </label>
                    <select
                      id="reservation_category"
                      value={formik.values.reservation_category}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a category</option>
                      <option value="GEN">GEN</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="OBC">OBC</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="sgc"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Select SGC
                    </label>
                    <select
                      id="sgc"
                      value={formik.values.sgc}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a SGC</option>
                      <option value="SGC">SGC</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="bpl"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Select BPL
                    </label>
                    <select
                      id="bpl"
                      value={formik.values.bpl}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a BPL</option>
                      <option value="BPL">BPL</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300 mb-6" />
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="diffrently_abled"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      DIFFERENTLY ABLED
                    </label>
                    <select
                      id="diffrently_abled"
                      value={formik.values.diffrently_abled}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a option</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="teacher_ward"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      TEACHERS WARD
                    </label>
                    <select
                      id="teacher_ward"
                      value={formik.values.teacher_ward}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a option</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="religion"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Religion
                    </label>
                    <select
                      id="religion"
                      value={formik.values.religion}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose an option</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                      <option value="Sikh">Sikh</option>
                      <option value="Buddhist">Buddhisth</option>
                      <option value="Zoroastrian">Zoroastrian</option>
                      <option value="Jain">Jain</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor="quota"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Quota
                    </label>
                    <select
                      id="quota"
                      value={formik.values.quota}
                      onChange={formik.handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option selected>choose a option</option>
                      <option value="BPL">BPL</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300 mb-6" />

              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="date_of_admission"
                    >
                      DATE OF ADMISSION
                    </label>
                    <input
                      id="date_of_admission"
                      value={formik.values.date_of_admission}
                      onChange={formik.handleChange}
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="tc_issued"
                    >
                      TC Issued
                    </label>
                    <input
                      value={formik.values.tc_issued}
                      onChange={formik.handleChange}
                      type="text"
                      id="tc_issued"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="remarks"
                    >
                      Remarks
                    </label>
                    <textarea
                      value={formik.values.remarks}
                      onChange={formik.handleChange}
                      type="text"
                      id="remarks"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                    ></textarea>
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

export default BioData;
