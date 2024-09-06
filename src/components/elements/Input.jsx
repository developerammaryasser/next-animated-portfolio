const Input = ({
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  className = "",
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`peer h-full w-full bg-white border-b border-blue-gray-200 px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${
        className || ""
      }`}
    />
  );
};
export default Input;
