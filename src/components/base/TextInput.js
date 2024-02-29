import React, { useState } from "react";

export const TextInput = ({
  value,
  onChange,
  placeholder,
  validate,
  className,
  ...restProps
}) => {
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validate && !validate(inputValue)) {
      setError("Input is not valid");
    } else {
      setError(null);
    }
    onChange(inputValue);
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={error ? "error" : ""}
        {...restProps}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
