import React from "react";

const FormFields = ({ fields, formData, handleChange, errors }) => {
  return fields.map((field) => (
    <div key={field.name} className="form-group">
      <label>{field.label}</label>
      {field.type === "dropdown" ? (
        <select
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {field.options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
        />
      )}
      {errors[field.name] && <span className="error">{errors[field.name]}</span>}
    </div>
  ));
};

export default FormFields;
