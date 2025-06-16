import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const TogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showAndHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <form>
        <div>
          <label
            htmlFor="
          password"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
          />
          <span style={{ cursor: "pointer", position: "absolute", right: "10px", top: "10px" }}>
            {showPassword ? (
              <FaRegEyeSlash onClick={showAndHidePassword} />
            ) : (
              <FaRegEye onClick={showAndHidePassword} />
            )}
          </span>
        </div>
      </form>
    </div>
  );
};
export default TogglePassword;
