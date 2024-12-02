import { getFormFields } from "../models/formModel";

export const fetchFields = (formType) => {
  return getFormFields(formType);
};

export const validateForm = (fields, data) => {
  const errors = {};
  fields.forEach((field) => {
    if (field.required && !data[field.name]) {
      errors[field.name] = `${field.label} is required`;
    } else if (field.type === "number" && isNaN(data[field.name])) {
      errors[field.name] = `${field.label} must be a number`;
    }
  });
  return errors;
};
