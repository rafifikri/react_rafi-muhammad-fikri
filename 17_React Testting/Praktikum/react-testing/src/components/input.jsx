import clsx from "clsx";

function Input(props) {
  const { label, id, error, register, name } = props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <label className="ml-1 sm:mt-2" htmlFor={id}>
            {label}
          </label>
          <input
            className={clsx(
              "border-2 rounded-md w-full sm:w-[300px] h-[35px] file:border-[#0d6efd] file:hover:cursor-pointer "
            )}
            {...(register ? register(name) : {})}
            {...props}
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
  const { label, placeholder, id, error, options, register, name } = props;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <div className="flex flex-col">
          <label className="sm:mt-2" htmlFor={id}>
            {label}
          </label>
          <select
            className={clsx(
              "border-2 rounded-md w-full sm:w-[300px] h-[35px] hover:cursor-pointer"
            )}
            defaultValue=""
            {...(register ? register(name) : {})}
            {...props}
          >
            <option disabled value="">
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
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
  const { label, id, error, register, name } = props;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center sm:flex-col">
        <label className="mr-[140px] sm:mt-2" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border border-gray-300 rounded-lg w-full sm:w-[300px]">
          <textarea
            className={clsx(
              "w-full h-[100px] p-2",
              !error && "border-slate-200"
            )}
            {...(register ? register(name) : {})}
            {...props}
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

function RadioGroup(props) {
  const { label, error, options, register, name } = props;

  return (
    <div className="container mx-auto">
      <div className="flex item-center" aria-label={props["aria-label"]}>
        <label>{label}</label>
        {options.map((option) => (
          <div key={option.id} className="flex gap-3">
            <input
              type="radio"
              value={option.label}
              id={option.id}
              {...(register ? register(name) : {})}
            />
            <label
              className="text-black dark:text-white tracking-wider"
              htmlFor={option.id}
            >
              {option.label}
            </label>
          </div>
        ))}
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

export { Input, Select, TextArea, RadioGroup }; // named export
// export default Input // export default
