import React, { useState, useEffect } from "react";
import { fetchFields, validateForm } from "../controllers/formController";
import FormFields from "./FormFields";
import "./DynamicForm.css";

const DynamicForm = () => {
  const [formType, setFormType] = useState("");
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    if (formType) {
      const { fields } = fetchFields(formType);
      setFormFields(fields);
      setFormData({});
      setErrors({});
    }
  }, [formType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formFields, formData);
    if (Object.keys(newErrors).length === 0) {
      setSubmittedData([...submittedData, formData]);
      setFormData({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="dynamic-form">
      <h1>Dynamic Form</h1>
      <select onChange={(e) => setFormType(e.target.value)} value={formType}>
        <option value="">Select Form Type</option>
        <option value="userInformation">User Information</option>
        <option value="addressInformation">Address Information</option>
        <option value="paymentInformation">Payment Information</option>
      </select>

      {formFields.length > 0 && (
        <form onSubmit={handleSubmit}>
          <FormFields
            fields={formFields}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
