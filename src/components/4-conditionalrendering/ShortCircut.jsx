import { useState } from "react";

const profile = {
  firstname: "Marusoft",
  lastname: "Kehinde",
  role: "Software Engineer",
  gender: "Male",
};

const ShortCircut = () => {
  const [text, setText] = useState(true);
  const [name, setName] = useState("Marusoft Academy");
  const [users, setUsers] = useState(profile);

  return (
    <div>
      <h1>ShortCircuitTwo</h1>
      {users && <DisplayUsersProfile {...users} />}

      <div>
        {text && <p>I am a paragraph</p>}
        {name && <p>I am the second paragraph</p>}
      </div>
      <div>{name || <p>I am the third paragraph</p>}</div>
    </div>
  );
};

const DisplayUsersProfile = ({ firstname, lastname, role, gender }) => {
  return (
    <div>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Role: {role}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default ShortCircut;
