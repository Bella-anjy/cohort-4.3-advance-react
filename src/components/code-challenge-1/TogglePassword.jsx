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
            
            style={{
              position: "relative",
              // backgroundColor: "red",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "290px",
              // left: "100px",
              // bottom: "-2px",
              marginTop: "11px",
              // transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
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
