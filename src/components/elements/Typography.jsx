const Typography = ({ variant, className = "", children }) => {
  let element;
  switch (variant) {
    case "h1":
      element = (
        <h1
          className={`block font-sans text-6xl antialiased font-bold leading-tight tracking-normal text-inherit ${className}`}
        >
          {children}
        </h1>
      );
      break;
    case "h2":
      element = (
        <h2
          className={`block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit ${className}`}
        >
          {children}
        </h2>
      );
      break;
    case "h3":
      element = (
        <h3
          className={`block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit ${className}`}
        >
          {children}
        </h3>
      );
      break;
    case "lead":
      element = (
        <p
          className={`block font-sans text-base antialiased font-light leading-relaxed text-inherit ${className}`}
        >
          {children}
        </p>
      );
      break;
    case "p":
      element = (
        <p
          className={`block font-sans text-base antialiased leading-relaxed text-inherit ${className}`}
        >
          {children}
        </p>
      );
  }
  return element;
};
export default Typography;
