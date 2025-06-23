import { useState, useEffect } from "react";

/**
 * user challenge
 * create state value with user default value null
 * create two functions
 * login - set's user equal to object with name property
 * logout - set's user equal to null
 * in jsx use ? to display two different setups
 * h4 with "hello there user name" and logout button
 * h4 with "Please login" and login button
 */

const Auth = () => {
  const [user, setUser] = useState(null);

  // login function to set user
  const login = () => {
    setUser({ name: "Bella Anjy" });
  };

  // logout function to set user to null
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h4>Hello there {user.name}</h4>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h4>Please login</h4>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};
export default Auth;
