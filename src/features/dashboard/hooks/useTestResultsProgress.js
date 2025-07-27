import { useState } from 'react';

export const useTestResultsProgress = (totalQuestions = 20) => {
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const goToNextQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.min(prevQuestion + 1, totalQuestions));
    };

    const goToPreviousQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.max(prevQuestion - 1, 1));
    };

    const goToQuestion = (questionNumber) => {
        if (questionNumber >= 1 && questionNumber <= totalQuestions) {
            setCurrentQuestion(questionNumber);
        }
    };

    const isLastQuestion = currentQuestion === totalQuestions;
    const isFirstQuestion = currentQuestion === 1;

    const resetResults = () => {
        setCurrentQuestion(1);
    };

    return {
        currentQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        goToQuestion,
        isLastQuestion,
        isFirstQuestion,
        resetResults,
        totalQuestions
    };
};
