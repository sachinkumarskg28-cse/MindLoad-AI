function InputForm({
  studentText,
  setStudentText,
  handleAnalyze,
}) {
  return (
    <>
      <textarea
        className="textbox"
        placeholder="Describe your academic experience..."
        value={studentText}
        onChange={(e) =>
          setStudentText(e.target.value)
        }
      />

      <br />

      <button
        className="button"
        onClick={handleAnalyze}
      >
        Analyze
      </button>
    </>
  );
}

export default InputForm;