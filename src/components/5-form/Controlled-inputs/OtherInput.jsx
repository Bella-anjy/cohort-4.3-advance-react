import { useState } from "react";

const frameworks = [
  { id: 1, name: "React" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Vue" },
  { id: 4, name: "Nextjs" },
  { id: 5, name: "Svelte" },
  { id: 6, name: "Solid" },
];

const OtherInput = () => {
  // State to manage the checkbox and select input
  const [terms, setTerms] = useState(false);
  const [selectedFramework, setSelectedFramework] =
    useState("select framework");

  // Handler for checkbox change
  const handleTermsAndCondition = (e) => {
    console.log("event object", e);
    setTerms(e.target.checked);
  };

  // Handler for select input change
  const handleFramework = (e) => {
    console.log("Selected framework:", e.target.value);
    setSelectedFramework(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={terms}
            onChange={handleTermsAndCondition}
          />
          <label htmlFor="terms">Terms and Condition</label>
        </div>
        <div>
          <label htmlFor="">Select react framework</label>
          <select
            name="selectedFramework"
            id="selectedFramework"
            value={selectedFramework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => (
              <option key={framework.id}>{framework.name}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
export default OtherInput;
