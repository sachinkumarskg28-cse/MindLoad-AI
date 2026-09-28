export const analyzeText = async (text) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      const lowerText = text.toLowerCase();

      if (
        lowerText.includes("exam") ||
        lowerText.includes("deadline") ||
        lowerText.includes("pressure")
      ) {
        resolve({
          stress: "High",
          cognitiveLoad: "High",
          emotion: "Anxiety",
          sentiment: "Negative",
          stressScore: 85,
          cognitiveLoadScore: 72,
          confidence: 92,
        });
      }

      else {
        resolve({
          stress: "Low",
          cognitiveLoad: "Low",
          emotion: "Calm",
          sentiment: "Positive",
          stressScore: 25,
          cognitiveLoadScore: 30,
          confidence: 88,
        });
      }

    }, 1000);
  });
};