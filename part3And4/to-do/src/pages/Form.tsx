import React, { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "",
    description: "",
    ID: "",
    UUID: "",
    itemHash: "",
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
        <input
          className="mb-4 p-2 border border-gray-300 rounded"
          type="text"
          value={formData.ID}
          placeholder="this is gonna be the id "
          onChange={handleChange}
          name="ID"
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded"
          type="text"
          value={formData.UUID}
          placeholder="this is gonna be the uuid"
          onChange={handleChange}
          name="UUID"
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded"
          type="text"
          value={formData.itemHash}
          placeholder="this is gonna be the itemHash"
          onChange={handleChange}
          name="itemHash"
        />
      </form>
    </section>
  );
};

export default Form;
