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
    subjects: "",
  
  };

  const validationSchema = Yup.object().shape({
    class_name: Yup.string().required("Class Name is required"),
    class_section: Yup.string().required("Section is required"),
    subjects: Yup.date().required("Subject is required"),

  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(addBioData(values));
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
               
                <div className="w-full lg:w-4/12 px-4">
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
                        formik.touched.class_name &&
                        formik.errors.class_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.class_name &&
                    formik.errors.class_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.class_name}
                      </p>
                    )}
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="class_section"
                    >
                      Select Section
                    </label>
                 <select id="class_section"
                   value={formik.values.class_section}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 >
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                  <option value='D'>D</option>
                  
                 </select>
                  </div>
                  {formik.touched.class_section && formik.errors.class_section && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.class_section}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="subjects"
                    >
                     Subjetcs
                    </label>
                    <input
                      type="text"
                      id="subjects"
                      value={formik.values.guardian_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.guardian_name &&
                        formik.errors.guardian_name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.guardian_name &&
                    formik.errors.guardian_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.guardian_name}
                      </p>
                    )}
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

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
