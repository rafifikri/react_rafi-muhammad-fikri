export default function Button(props) {
  const { label } = props;

  return (
    <div className="justify-center pt-4">
      <button
        className="p-3 bg-[#0d6efd] rounded-xl px-6 text-white font-bold mb-5"
        {...props}
      >
        {label}
      </button>
    </div>
  );
}
