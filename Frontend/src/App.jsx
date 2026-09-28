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

      {loading && (
        <h3>Analyzing...</h3>
      )}

      {result && (
        <ResultsSection
          result={result}
        />
      )}

    </div>
  );
}

export default App;