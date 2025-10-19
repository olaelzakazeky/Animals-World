import React, { useState, useEffect } from "react";
import animals from "./animalsData";
import "./Section4.css";

function Section4() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    // نعمل shuffle للبيانات ونختار 20 سؤال عشوائي
    const shuffled = [...animals].sort(() => 0.5 - Math.random()).slice(0, 20);

    // نحول كل حيوان إلى سؤال
    const generatedQuestions = shuffled.map((animal) => {
      const options = [animal.name];
      while (options.length < 4) {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        if (!options.includes(randomAnimal.name)) {
          options.push(randomAnimal.name);
        }
      }

      // نخلط ترتيب الاختيارات
      return {
        question: `ما اسم الحيوان الذي ${animal.info.split(".")[0]}؟`,
        correct: animal.name,
        options: options.sort(() => 0.5 - Math.random()),
      };
    });

    setQuestions(generatedQuestions);
  }, []);

  const handleAnswer = (index, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [index]: selectedOption }));
  };

  const handleSubmit = () => {
    let result = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) {
        result++;
      }
    });
    setScore(result);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <section id="section4" className="quiz-section">
      <div className="container">
        <h2 className="quiz-title">اختبر نفسك 🧠</h2>

        {score === null ? (
          <>
            {questions.map((q, index) => (
              <div key={index} className="question-card">
                <p className="question-text">
                  {index + 1}. {q.question}
                </p>
                <div className="options">
                  {q.options.map((option, i) => (
                    <button
                      key={i}
                      className={`option-btn ${
                        answers[index] === option ? "selected" : ""
                      }`}
                      onClick={() => handleAnswer(index, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
            >
              تأكيد الإجابات ✅
            </button>
          </>
        ) : (
          <div className="result-box">
            <h3>
              نتيجتك: {score} / {questions.length}
            </h3>
            {score > 15 ? (
              <p className="good-result">أحسنت يا بطل 🎉👏</p>
            ) : (
              <p className="bad-result">ذاكر تاني يا بطل 💪</p>
            )}
            <button className="retry-btn" onClick={handleRetry}>
              أعد الاختبار 🔁
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section4;
