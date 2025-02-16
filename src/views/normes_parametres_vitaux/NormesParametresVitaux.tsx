import "./normesParametresVitaux.scss";
import { useState, ReactElement } from "react";
import { generateQuestion } from "../../utils/scripts/generateQuestions.ts";

export default function NormesParametresVitaux(): ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((a) => a !== answer);
      } else {
        return [...prev, answer];
      }
    });
  };

  const validateAnswer = () => {
    const correctAnswers = currentQuestion.correctAnswers.sort();
    const userAnswers = selectedAnswers.sort();

    if (
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every((val, index) => val === userAnswers[index])
    ) {
      setFeedback("Correct !");
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. Les bonnes réponses étaient : ${correctAnswers.join(", ")}`);
    }
    setQuestionCount(questionCount + 1);
  };

  const nextQuestion = () => {
    if (questionCount < 20) {
      setCurrentQuestion(generateQuestion());
      setSelectedAnswers([]);
      setFeedback(null);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setQuestionCount(0);
    setCurrentQuestion(generateQuestion());
    setSelectedAnswers([]);
    setFeedback(null);
  };

  return (
      <main>
        <div className="qcm-container">
          <h2 className="qcm-title">QCM - Normes Paramètres Vitaux</h2>
          {questionCount < 20 ? (
              <>
                <p className="qcm-question">{currentQuestion.question}</p>
                <div className="options">
                  {currentQuestion.options.map((option, index) => (
                      <button
                          key={index}
                          className={`option-button ${selectedAnswers.includes(option) ? "selected" : ""}`}
                          onClick={() => handleAnswer(option)}
                          disabled={!!feedback}
                      >
                        {option}
                      </button>
                  ))}
                </div>
                {!feedback && (
                    <button className="validate-button next-button" onClick={validateAnswer}>
                      Valider
                    </button>
                )}
                {feedback && (
                    <p className={`feedback ${feedback.startsWith("Correct") ? "correct" : "incorrect"}`}>
                      {feedback}
                    </p>
                )}
                {feedback && (
                    <button className="next-button" onClick={nextQuestion}>
                      Suivant
                    </button>
                )}
              </>
          ) : (
              <div className="qcm-results">
                <h3 className="final-score">Votre score final : {score} / 20</h3>
                <button className="restart-button" onClick={restartQuiz}>
                  Recommencer
                </button>
              </div>
          )}
        </div>
      </main>
  );
}