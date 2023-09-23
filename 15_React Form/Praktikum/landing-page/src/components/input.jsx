import React from "react";

function Input(props) {
  const {
    label,
    onChange,
    type,
    placeholder,
    value,
    defaultValue,
    register,
    name,
    error,
  } = props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <label className="ml-1 sm:mt-2">{label}</label>
          <input
            className="border-2 rounded-md w-full sm:w-[300px] h-[35px] file:border-[#0d6efd] file:hover:cursor-pointer "
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            {...(register ? register(name) : {})}
          />
          {error && (
            <label className="label">
              <span className="break-words text-sm font-light text-red-500">
                {error}
              </span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

function Select(props) {
  const { label, placeholder, value, onChange, options = [], error } = props;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <div className="flex flex-col">
          <label className="sm:mt-2">{label}</label>
          <select
            className="border-2 rounded-md w-full sm:w-[300px] h-[35px] hover:cursor-pointer"
            onChange={onChange}
            value={value}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {error && (
            <label className="label">
              <span className="break-words text-sm font-light text-red-500">
                {error}
              </span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

function TextArea(props) {
  const { label, onChange, value, type = [], error } = props;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <label className="mr-[140px] sm:mt-2">{label}</label>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border border-gray-300 rounded-lg w-full sm:w-[300px]">
          <textarea
            className="w-full h-[100px] p-2"
            onChange={onChange}
            value={value}
            type={type}
          />
        </div>
      </div>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500 pl-5">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function Radio(props) {
  const { label, onChange, value, type, error } = props;

  return (
    <div className="container mx-auto">
      <div className="flex item-center">
        <input
          className="mr-2 hover:cursor-pointer"
          type={type}
          value={value}
          onChange={onChange}
        />
        <label>{label}</label>
        {error && (
          <label className="label">
            <span className="break-words text-sm font-light text-red-500">
              {error}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}

export { Input, Select, TextArea, Radio }; // named export
// export default Input // export default
