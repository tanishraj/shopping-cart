import React from "react";

export const TextInput = ({
  value,
  onChange,
  placeholder,
  className,
  ...restProps
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};
