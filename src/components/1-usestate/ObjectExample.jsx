import { useState } from "react";

const employee = {
  name: "Marusoft",
  role: "Admin",
  age: 30,
};

const ObjectExample = () => {
  const [user, setUser] = useState(employee);

  const updateUser = () => {
    setUser({
      ...user,
      name: "Kehinde",
      role: "Manager",
      age: 35,
    });
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateUser}>Update Details</button>
    </div>
  );
};
export default ObjectExample;
