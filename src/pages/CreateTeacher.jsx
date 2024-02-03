import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
export default function CreateTeacher() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    image_url: "",
    incharge: "no",
    role: "",
    phone: "",
    address: "",

    branch: "",
    about: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    image_url: Yup.string().required("Image URL is required"),
    role: Yup.string().required("Role is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    branch: Yup.string().required("Branch is required"),
    about: Yup.string(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      //   dispatch(addBioData(values));
      try {
        const response = await axios.post(
          "http://localhost:8000/api/teachers",
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
                Create Class
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
                      htmlFor="name"
                    >
                      Teacher Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="image_url"
                    >
                      Image url
                    </label>
                    <input
                      type="text"
                      id="image_url"
                      value={formik.values.image_url}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.image_url && formik.errors.image_url
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.image_url && formik.errors.image_url && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.image_url}
                    </p>
                  )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 pb-6 border-blueGray-300" />

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
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.address && formik.errors.address
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.address}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="phone"
                    >
                      phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.address && formik.errors.address
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.address}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="branch"
                    >
                      branch
                    </label>
                    <input
                      type="text"
                      id="branch"
                      value={formik.values.branch}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        formik.touched.address && formik.errors.address
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.address}
                    </p>
                  )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 pb-6 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Designation
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="incharge"
                    >
                      Incharge
                    </label>
                    <input
                      type="checkbox"
                      id="incharge"
                      checked={formik.values.incharge !=='' ? true : false}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-9/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="role"
                    >
                      select Role
                    </label>
                    <select
                      name="role"
                      id="role"
                      onChange={formik.handleChange}
                      value={formik.values.role}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="teacher">Teacher</option>
                      <option value="accountant">Accountant</option>
                      <option value="librarian">Librarian</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="about"
                    >
                      Remarks
                    </label>
                    <textarea
                      value={formik.values.about}
                      onChange={formik.handleChange}
                      type="text"
                      id="about"
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
