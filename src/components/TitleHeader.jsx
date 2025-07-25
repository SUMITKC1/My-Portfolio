const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-12">
      <h1 className="font-extrabold md:text-5xl text-3xl text-center text-white drop-shadow-lg tracking-tight">
        {title}
      </h1>
      <div className="inline-block mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold tracking-widest uppercase shadow-md">
        {sub}
      </div>
    </div>
  );
};

export default TitleHeader;
