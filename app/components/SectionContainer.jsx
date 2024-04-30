function SectionContainer({ children }) {
  return (
    <section className="relative bg-portafino dark:bg-blue-dianne-700 grid gap-2 p-6 w-[92vw] lg:w-2/3 xl:w-1/2 m-auto rounded-md shadow-dentro dark:shadow-dentroDark">
      {children}
    </section>
  );
}

export default SectionContainer;