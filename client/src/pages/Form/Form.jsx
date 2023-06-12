import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div>
        <h2>ADD A TOURIST ACTIVITY</h2>
      </div>
      <form className="form">
        <div className="form-wrapper">
          <label>Name</label>
          <input className="input" type="text" />
        </div>
        <div className="form-two">
          <div className="form-wrapper">
            <label>Difficulty</label>
            <input className="input" type="text" />
          </div>
          <div className="form-wrapper">
            <label>Duration</label>
            <input className="input" type="text" />
          </div>
        </div>
        <div className="form-two">
          <div className="form-wrapper-select">
            <label>Temporada</label>
            <input className="input" type="text" />
          </div>
          <div className="form-wrapper-select">
            <label>Country/ies</label>
            <select className="input">
              <option>Argentina</option>
              <option>Brasil</option>
              <option>Nigeria</option>
            </select>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
