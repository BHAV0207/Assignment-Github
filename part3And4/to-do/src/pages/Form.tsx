import React, { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <form action="">
        <input
          className="mb-4 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Please Enter Your Name"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Please Enter The Description"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
      </form>
    </section>
  );
};

export default Form;
