import React from "react";

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue, className } =
    props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <label className="ml-1">{label}</label>
          <input
            className={className}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

function Select(props) {
  const {
    label,
    placeholder,
    value,
    onChange,
    options,
    className = [],
  } = props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <label>{label}</label>
          <select className={className} onChange={onChange} value={value}>
            <option disabled>{placeholder}</option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function TextArea(props) {
  const { label, onChange, defaultValue, value, type = [] } = props;

  return (
    <div className="container">
      <div className="flex items-center justify-center ">
        <label className="mr-[145px]">{label}</label>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border border-gray-300 rounded-lg w-[300px] h-[100px]">
          <textarea
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            type={type}
          />
        </div>
      </div>
    </div>
  );
}

export { Input, Select, TextArea }; // named export
// export default Input // export default
