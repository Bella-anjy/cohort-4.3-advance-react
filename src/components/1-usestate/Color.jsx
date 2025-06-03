import  { useState } from "react";

const ColorPicker = () => {
  const colors = [
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
  ];
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: selectedColor,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2>Color Picker</h2>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
      <p>
        Selected Color: <strong>{selectedColor}</strong>
      </p>
    </div>
  );
};

export default ColorPicker;
