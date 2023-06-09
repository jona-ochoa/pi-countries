import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getActivity, getCountries, postActivity } from "../../redux/actions";
import "./form.css";
import FormSuccess from "../../components/FormSuccess/FormSuccess";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name required";
  }
  return errors;
}

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSubmited, setIsSubmited] = useState(false);

  const countries = useSelector((state) => state.countries).sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    const selectedCountries = e.target.value;
    if (!input.countries.includes(selectedCountries)) {
      setInput({
        ...input,
        countries: [...input.countries, selectedCountries],
      });
    } else {
      alert("Country already selected");
    }
  }

  function handleSeason(e) {
    setInput({
      ...input,
      season: e.target.value,
    });
  }

  function handleSelectDifficulty(e) {
    setInput({
      ...input,
      difficulty: e.target.value,
    });
  }

  function handleSelectDuration(e) {
    setInput({
      ...input,
      duration: e.target.value,
    });
  }

  function handleDelete(country) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== country),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name) {
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    } else {
      dispatch(postActivity(input));

      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      setIsSubmited(true);

      setTimeout(function () {
        navigate("/home");
      }, 2000);
    }
  }

  const season = ["Summer", "Winter", "Spring", "Autumn"];
  const difficulty = [1, 2, 3, 4, 5];
  const duration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div className="form-container">
      {!isSubmited ? (
        <div>
          <div>
            <h2>ADD A TOURIST ACTIVITY</h2>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <label>Name Activity: </label>
              <input
                className="input-name"
                type="text"
                value={input.name}
                placeholder="Your Activities"
                name="name"
                onChange={handleChange}
              />
              {errors.name && <p className="text-error">{errors.name}</p>}
            </div>
            <div className="form-two">
              <div className="form-wrapper">
                <label>Difficulty: </label>
                <select
                  className="input"
                  onChange={handleSelectDifficulty}
                  required
                >
                  <option value="" hidden>
                    Select difficulty
                  </option>
                  {difficulty.map((e, index) => (
                    <option value={e} key={index} name="difficulty">
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-wrapper">
                <label>Duration:</label>
                <select
                  className="input"
                  onChange={handleSelectDuration}
                  required
                >
                  <option value="" hidden>
                    Select duration
                  </option>
                  {duration.map((e, index) => (
                    <option value={e} key={index} name="duration">
                      {e} Hours
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-two">
              <div className="form-wrapper-select">
                <label>Season:</label>
                <select className="input" onChange={handleSeason} required>
                  <option value="" hidden>
                    Select season
                  </option>
                  {season.map((e, index) => (
                    <option value={e} key={index} name="season">
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-wrapper-select">
                <label>Country / ies:</label>
                <select className="input" onChange={handleSelect}>
                  <option value="" hidden>
                    Select country
                  </option>
                  {countries.map((e, index) => (
                    <option value={e.id} name="countries" key={index}>
                      {e.name}
                    </option>
                  ))}
                </select>
                <div>
                  <ul className="list">
                    <li className="li">
                      {input.countries.map((c, index) => (
                        <div key={index} className="countries">
                          {c}
                          <button onClick={() => handleDelete(c)} type="button">
                            Deleted
                          </button>
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default Form;
