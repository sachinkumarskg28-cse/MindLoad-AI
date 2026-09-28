import Recommendations from "./components/Recommendations";
import StressChart from "./charts/StressChart";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsSection from "./components/ResultsSection";

import { analyzeText } from "./api/predictionService";

function App() {
  const [studentText, setStudentText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (studentText.trim() === "") {
      alert("Please enter some text first.");
      return;
    }

    try {
      setLoading(true);

      const response =
        await analyzeText(studentText);

      setResult(response);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <Header />

      <InputForm
        studentText={studentText}
        setStudentText={setStudentText}
        handleAnalyze={handleAnalyze}
      />

      {loading && <p>Analyzing Student Response...</p>}

      {result && (
        <div>
          <ResultsSection result={result}/> 
          <StressChart result={result} />
          <Recommendations result={result} />
        </div>
      )}

    </div>
  );
}

export default App;