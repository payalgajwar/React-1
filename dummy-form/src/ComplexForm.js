import React, { useEffect, useState } from "react";

const ComplexForm = () => {
  const formCredentials = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  };
  const [formDetail, setFormDetail] = useState(formCredentials);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleValuesChange = (e) => {
    const { name, value } = e.target;
    setFormDetail({ ...formDetail, [name]: value });
  };

  const detailsSubmit = (e) => {
    e.preventDefault();
    setError(validation(formDetail));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(formDetail);
    }
  }, [error]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = alert("please fill the required field");
    }

    if (!values.lastName) {
      errors.lastName = alert("please fill the required field");
    }

    if (!values.emailAddress) {
      errors.emailAddress = alert("please fill the required field");
    }

    if (!values.password) {
      errors.password = alert("please fill the required field");
    } else if (!values.password > 8) {
      errors.password = alert("password should have aleast 8 characters");
    }
    return errors;
  };

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div>
      {Object.keys(error).length === 0 && isSubmit ? (
        alert("Successfully Submitted")
      ) : (
        <h1></h1>
      )}
      <form onSubmit={detailsSubmit}>
        <div>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={formDetail.firstName}
                onChange={handleValuesChange}
              />
            </label>
          </div>
          <p>{error.firstName}</p>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={formDetail.lastName}
              onChange={handleValuesChange}
            />
          </div>
          <p>{error.lastName}</p>

          <div>
            <label>Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="emailAddress"
              value={formDetail.emailAddress}
              onChange={handleValuesChange}
            />
          </div>
          <p>{error.emailAddress}</p>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formDetail.password}
              onChange={handleValuesChange}
            />
            {/* {error && <span style={{ color: "red" }}>{error}</span>} */}
          </div>
          <p>{error.emailAddress}</p>

          <div>
            <label>
              Gender:
              <div>
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    checked={gender === "other"}
                    onChange={() => setGender("other")}
                  />
                  Other
                </label>
              </div>
            </label>
          </div>
          <div>
            <label>
              Country:
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option> India</option>
                <option>USA</option>
                <option>Russia</option>
                <option>Canada</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={checkbox}
                onChange={handleCheckbox}
              />
              I agree that all details filled are correct.
            </label>
          </div>
          <div>
            <button type="submitbutton">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComplexForm;
