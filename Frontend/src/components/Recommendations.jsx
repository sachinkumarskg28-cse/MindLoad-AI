function Recommendations({ result }) {

  const recommendations = [];

  if (result?.stress === "High") {
    recommendations.push(
      "Create a structured study schedule."
    );

    recommendations.push(
      "Take regular breaks while studying."
    );
  }

  if (result?.cognitiveLoad === "High") {
    recommendations.push(
      "Break large tasks into smaller goals."
    );

    recommendations.push(
      "Avoid multitasking during study sessions."
    );
  }

  if (result?.emotion === "Anxiety") {
    recommendations.push(
      "Practice relaxation techniques."
    );
  }

  return (
    <div className="recommendation-box">
      <h2>Recommendations</h2>

      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;