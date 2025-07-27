import { useState } from "react";

export const useTestProgress = (totalQuestions = 5) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const goToNextQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, totalQuestions)
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 1));
  };

  const updateAnswer = (questionId, answerIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [answerIndex]: value,
      },
    }));
  };

  const getAnswer = (questionId, answerIndex) => {
    return answers[questionId]?.[answerIndex] || "";
  };

  const getAnsweredQuestions = () => {
    return Object.keys(answers)
      .map(Number)
      .filter((questionId) => {
        const questionAnswers = answers[questionId];
        return (
          questionAnswers &&
          Object.values(questionAnswers).some((answer) => answer.trim() !== "")
        );
      });
  };

  const isLastQuestion = currentQuestion === totalQuestions;
  const isFirstQuestion = currentQuestion === 1;

  const resetTest = () => {
    setCurrentQuestion(1);
    setAnswers({});
  };

  const submitTest = () => {
    console.log("Test submitted with answers:", answers);
    return answers;
  };

  return {
    currentQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    isLastQuestion,
    isFirstQuestion,
    resetTest,
    totalQuestions,
    updateAnswer,
    getAnswer,
    getAnsweredQuestions,
    submitTest,
    answers,
  };
};
