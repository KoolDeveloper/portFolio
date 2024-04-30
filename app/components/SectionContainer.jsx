function SectionContainer({ children }) {
  return (
    <section className="relative bg-blue-dianne-400 grid gap-2 p-6 w-[92vw] lg:w-2/3 xl:w-1/2 m-auto z-10 rounded-md shadow-dentro">
      {children}
    </section>
  );
}

export default SectionContainer;
