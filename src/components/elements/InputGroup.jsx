const InputGroup = ({
  label = { isLabel: true, text: "" },
  className = "",
  children,
}) => {
  return (
    <div className={`flex flex-col gap-y-3 ${className || ""}`}>
      {label.isLabel && <label htmlFor={label.id} className="text-base">{label.text}</label>}
      {children}
    </div>
  );
};
export default InputGroup;
