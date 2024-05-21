function SectionContainer({ children, mdCols }) {
  return (
    <section
      className={`relative bg-portafino dark:bg-blue-dianne-700 grid gap-2 p-6 ${mdCols} w-full m-auto md:m-0 rounded-md shadow-dentro dark:shadow-dentroDark`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
