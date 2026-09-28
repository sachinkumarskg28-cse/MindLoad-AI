function ResultCard({ title, value }) {

  const getColor = () => {
    if (value === "High") return "#ef4444";      // Red
    if (value === "Medium") return "#f59e0b";    // Orange
    if (value === "Low") return "#22c55e";       // Green
    return "#ffffff";                            // Default
  };

  return (
    <div className="card">
      <h3>{title}</h3>

      <p
        style={{
          color: getColor(),
          fontWeight: "bold",
          fontSize: "1.3rem"
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default ResultCard;