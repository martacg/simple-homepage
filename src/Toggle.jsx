import "./Toggle.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toogle-container">
      <div className="toggle-content">
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={!isChecked}
        />
        <label htmlFor="check">
          <span className="light"></span>
          <span className="dark"></span>
        </label>
      </div>
    </div>
  );
};