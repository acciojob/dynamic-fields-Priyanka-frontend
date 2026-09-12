import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState([
    {
      name: "",
      age: ""
    }
  ]);

  // Add new field
  const addField = () => {
    setFormData([
      ...formData,
      {
        name: "",
        age: ""
      }
    ]);
  };

  // Update field
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedData = [...formData];

    updatedData[index][name] = value;

    setFormData(updatedData);
  };

  // Remove field
  const removeField = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);

    setFormData(updatedData);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <form onSubmit={handleSubmit}>
        {formData.map((data, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={data.age}
              onChange={(e) => handleChange(index, e)}
            />

            <button
              type="button"
              onClick={() => removeField(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More...
        </button>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
