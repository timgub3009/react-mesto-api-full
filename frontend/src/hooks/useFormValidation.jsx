import React from "react";

function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const error = event.target.validationMessage;
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: error }));
    const isValid = event.target.closest("form").checkValidity();
    setIsValid(isValid);
  };

  const resetValidation = React.useCallback(
    (values = {}, errors = {}, isValid = false) => {
      setValues(values);
      setErrors(errors);
      setIsValid(isValid);
    },
    [setValues, setErrors, setIsValid]
  );
  return {
    values,
    errors,
    handleChange,
    setValues,
    setErrors,
    resetValidation,
    isValid,
  };
}

export default useFormValidation;
