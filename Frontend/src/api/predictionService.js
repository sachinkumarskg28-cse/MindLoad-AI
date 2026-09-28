// src/api/predictionService.js

export const analyzeText = async (text) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        stress: "High",
        cognitiveLoad: "High",
        emotion: "Anxiety",
        sentiment: "Negative"
      });

    }, 1000);

  });

};