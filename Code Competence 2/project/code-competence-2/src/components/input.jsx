import React from "react";

// mt-1 p-2 w-full rounded-md border-gray-300

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue, name } =
    props;

  return (
    <div className="container">
      <div className="flex justify-center sm:flex-col">
        <div className="flex flex-col">
          <label className="ml-1 sm:mt-2">{label}</label>
          <input
            className="border-2 rounded-md w-full h-[35px]"
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            name={name}
          />
        </div>
      </div>
    </div>
  );
}

function TextArea(props) {
  const { label, onChange, value, type = [], name } = props;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full">
          <label className="ml-1 sm:mt-2">{label}</label>
          <textarea
            className=" h-[100px] p-2 border border-gray-300 rounded-lg"
            onChange={onChange}
            value={value}
            type={type}
            name={name}
          />
        </div>
      </div>
    </div>
  );
}

export { Input, TextArea }; // named export
// export default Input // export default
