import Link from "next/link";
const Button = ({
  href,
  variant = "primary",
  type = "button",
  className = "",
  children,
}) => {
  let style;
  switch (variant) {
    case "primary":
      style = `rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${className}`;
      break;
    case "outline":
      style = `rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${className}`;
  }
  return (
    <>
      {href ? (
        <Link href={href} className={style}>
          {children}
        </Link>
      ) : (
        <button type={type} className={style}>
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
