import ResultCard from "./ResultCard";

function ResultsSection({ result }) {
  return (
    <div className="results">
      <h2>Analysis Results</h2>

      <div className="card-container">

        <ResultCard
          title="Stress"
          value={result.stress}
        />

        <ResultCard
          title="Cognitive Load"
          value={result.cognitiveLoad}
        />

        <ResultCard
          title="Emotion"
          value={result.emotion}
        />

        <ResultCard
          title="Sentiment"
          value={result.sentiment}
        />

      </div>
    </div>
  );
}

export default ResultsSection;