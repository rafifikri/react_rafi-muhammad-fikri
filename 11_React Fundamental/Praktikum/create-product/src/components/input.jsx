import React from "react";

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue, className } =
    props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <label className="ml-1 sm:mt-2">{label}</label>
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
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <div className="flex flex-col">
          <label className="sm:mt-2">{label}</label>
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
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <label className="mr-[145px] sm:mt-2">{label}</label>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border border-gray-300 rounded-lg w-full sm:w-[300px]">
          <textarea
            className="w-full h-[100px] p-2"
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
