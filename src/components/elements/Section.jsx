const Section = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`relative py-16 ${className}`}>
      <div className="container h-full">{children}</div>
    </section>
  );
};
export default Section;
