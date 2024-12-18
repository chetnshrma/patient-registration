import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
// import PatientForm from "./components/PatientForm";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/patient-register" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/" element={<h1>Welcome to Dashboard</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


