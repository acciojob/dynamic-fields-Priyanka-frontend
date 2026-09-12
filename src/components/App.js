import React, { useState } from "react";

function App() {
  const [fields, setFields] = useState([
    { name: "", age: "" }
  ]);

  // Add a new Name + Age field
  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Update Name or Age
  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  // Remove a specific field
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              Name:
              <input
                type="text"
                value={field.name}
                placeholder="Name"
                onChange={(e) =>
                  handleChange(index, "name", e.target.value)
                }
              />
            </label>

            <label>
              Age:
              <input
                type="number"
                value={field.age}
                placeholder="Age"
                onChange={(e) =>
                  handleChange(index, "age", e.target.value)
                }
              />
            </label>

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
        <p>After clicking submit check console for data</p>
      </form>
    </div>
  );
}

export default App;
