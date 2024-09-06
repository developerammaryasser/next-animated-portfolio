const Textarea = ({
  placeholder,
  name,
  className = "",
  onChange,
  value,
  id,
  children,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={`peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-white px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 ${className}`}
    >
      {children}
    </textarea>
  );
};
export default Textarea;
