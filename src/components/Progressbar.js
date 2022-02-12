const Progressbar = ({ value = 0 }) => {
  return (
    <div className="progressbar">
      <div
        className="progressbar__progress"
        style={{ width: `${value}%` }}
      ></div>
      <div className="progressbar__text">{`${value}%`}</div>
    </div>
  );
};

export default Progressbar;
