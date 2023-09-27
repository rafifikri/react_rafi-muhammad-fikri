export default function Button(props) {
  const { label } = props;

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <button
          className="p-1 bg-[#0d6efd] rounded px-6 text-white m-5 w-[300px] h-[35px]"
          {...props}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
