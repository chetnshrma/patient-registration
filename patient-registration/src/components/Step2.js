import React from "react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Step 2: Assign Resources</h2>
      <button onClick={() => navigate("/step3")}>Next</button>
    </div>
  );
};

export default Step2;
