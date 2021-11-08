const Tube = ({ level }) => {
  const actualHeight = 80 * level;
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: `${actualHeight}px`,
      }}
    ></div>
  );
};

export default Tube;
