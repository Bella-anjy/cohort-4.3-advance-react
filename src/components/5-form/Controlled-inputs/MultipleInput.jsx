import { useState } from "react";

const MultipleInput = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    location: "",
  });

  // onchange handler
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            value={employee.firstName}
            name={"firstName"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            value={employee.lastName}
            name={"lastName"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={employee.email}
            name={"email"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={employee.password}
            name={"password"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            placeholder="Enter address"
            value={employee.address}
            name={"address"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="location"
            id="location"
            placeholder="Enter location"
            value={employee.location}
            name={"location"}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default MultipleInput;
