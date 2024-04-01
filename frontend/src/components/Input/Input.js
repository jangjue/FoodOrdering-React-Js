import React from "react";
import classes from './input.module.css'

function Input(
  { label, type, defaultValue, onChange, onBlur, name, error },
  ref
) {
  const getErrorMessage = () => {
    if (!error) return;
    if (error.message) return error.message;
    //defaults
    switch (error.type) {
      case "required":
        return "This Field Is Required";
      case "minLength":
        return "This Field Is Too Short";
      default:
        return "*";
    }
  };

  return <div></div>;
}

export default React.forwardRef(Input);
