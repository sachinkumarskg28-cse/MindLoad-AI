function StressChart({ result }) {
  return (
    <div className="chart-box">
      <h2>Stress & Cognitive Load</h2>

      <div className="metric">
        <p>Stress Score: {result.stressScore}%</p>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${result.stressScore}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="metric">
        <p>
          Cognitive Load: {result.cognitiveLoadScore}%
        </p>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${result.cognitiveLoadScore}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StressChart;