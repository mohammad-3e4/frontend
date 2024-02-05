import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
export default function CreateClass() {
  const dispatch = useDispatch();
  const initialValues = {
    class_name: "",
    class_section: "",
    hindi: "",
    english: "",
    math: "",
    physics: "",
    chemistry: "",
    drawing: "",
    punjabi: "",
    sports: "",
  };

  const validationSchema = Yup.object().shape({
    class_name: Yup.string().required("Class Name is required"),
    class_section: Yup.string()
      .required("Section is required")
      .min(1, "Section is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/create-class",
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
      <div className="w-2/3  px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Create Class
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
                      htmlFor="class_name"
                    >
                      Enter Class Name
                    </label>
                    <input
                      type="text"
                      id="class_name"
                      value={formik.values.class_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.class_name && formik.errors.class_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.class_name && formik.errors.class_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.class_name}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="class_section"
                    >
                      Select Section
                    </label>
                    <select
                      id="class_section"
                      value={formik.values.class_section}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option disabled selected value="">
                        choose an option
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                  {formik.touched.class_section &&
                    formik.errors.class_section && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.class_section}
                      </p>
                    )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Select Subjects
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="hindi"
                    >
                      hindi
                    </label>
                    <input
                      type="checkbox"
                      id="hindi"
                      checked={formik.values.hindi}
                      onChange={(e) =>
                        formik.setFieldValue("hindi", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.hindi && formik.errors.hindi
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.hindi && formik.errors.hindi && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.hindi}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="math"
                    >
                      math
                    </label>
                    <input
                      type="checkbox"
                      id="math"
                      checked={formik.values.math}
                      onChange={(e) =>
                        formik.setFieldValue("math", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.math && formik.errors.math
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.math && formik.errors.math && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.math}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="english"
                    >
                      english
                    </label>
                    <input
                      type="checkbox"
                      id="english"
                      checked={formik.values.english}
                      onChange={(e) =>
                        formik.setFieldValue("english", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.english && formik.errors.english
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.english && formik.errors.english && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.english}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="physics"
                    >
                      physics
                    </label>
                    <input
                      type="checkbox"
                      id="physics"
                      checked={formik.values.physics}
                      onChange={(e) =>
                        formik.setFieldValue("physics", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.physics && formik.errors.physics
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.physics && formik.errors.physics && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.physics}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="chemistry"
                    >
                      chemistry
                    </label>
                    <input
                      type="checkbox"
                      id="chemistry"
                      checked={formik.values.chemistry}
                      onChange={(e) =>
                        formik.setFieldValue("chemistry", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.chemistry && formik.errors.chemistry
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.chemistry && formik.errors.chemistry && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.chemistry}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="drawing"
                    >
                      drawing
                    </label>
                    <input
                      type="checkbox"
                      id="drawing"
                      checked={formik.values.drawing}
                      onChange={(e) =>
                        formik.setFieldValue("drawing", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.drawing && formik.errors.drawing
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.drawing && formik.errors.drawing && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.drawing}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="punjabi"
                    >
                      punjabi
                    </label>
                    <input
                      type="checkbox"
                      id="punjabi"
                      checked={formik.values.punjabi}
                      onChange={(e) =>
                        formik.setFieldValue("punjabi", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.punjabi && formik.errors.punjabi
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.punjabi && formik.errors.punjabi && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.punjabi}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3  flex justify-around items-center">
                    <label
                      className="uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="sports"
                    >
                      sports
                    </label>
                    <input
                      type="checkbox"
                      id="sports"
                      checked={formik.values.sports}
                      onChange={(e) =>
                        formik.setFieldValue("sports", e.target.checked)
                      }
                      onBlur={formik.handleBlur}
                      className={`border-0  ${
                        formik.touched.sports && formik.errors.sports
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.sports && formik.errors.sports && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.sports}
                    </p>
                  )}
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
}
