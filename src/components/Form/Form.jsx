import React, { useState } from "react";
import validator from "validator";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let errs = {};

    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!validator.isEmail(formData.email)) errs.email = "Invalid Email";
    if (!formData.message) errs.message = "Message is Required";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
        setErrors({});
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
        message: "",
      });
    }
  };

  return (
    <div className="px-6 pb-24">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          {errors.name && (
            <p className="text-sm italic text-lightCoral">{errors.name}</p>
          )}

          <label htmlFor="name" className="mb-2 block"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-b-[1px] bg-transparent pb-6 pl-2 pt-2 font-semibold text-white outline-none focus:outline-none ${
              errors.name ? "border-lightCoral" : ""
            }`}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          {errors.email && (
            <p className="text-sm italic text-lightCoral">{errors.email}</p>
          )}

          <label htmlFor="email" className="mb-2 block"></label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b-[1px] bg-transparent pb-6 pl-2 pt-2 font-semibold text-white outline-none focus:outline-none
            
            ${errors.email ? "border-lightCoral" : ""}

            `}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="mb-2 block"></label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border-b-[1px] bg-transparent  pb-6 pl-2 pt-2 font-semibold text-white outline-none focus:outline-none"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-b-[1px] bg-transparent  pb-6 pl-2 pt-2 font-semibold text-white outline-none focus:outline-none"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          {errors.message && (
            <p className="text-sm italic text-lightCoral">{errors.message}</p>
          )}

          <label htmlFor="message" className="mb-2 block"></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full border-b-[1px] bg-transparent pb-6 pl-2 pt-2 font-semibold text-white outline-none focus:outline-none
            
            ${errors.message ? "border-lightCoral" : ""}

              
            `}
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex h-[42px] w-[123px] items-center justify-center rounded-full border border-white bg-white font-semibold text-deepJungleGreen"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
