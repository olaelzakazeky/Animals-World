import React, { useEffect, useState } from "react";
import "./Section3.css";
import animals from "./animalsData";

function Section3() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔀 خلط الحيوانات واختيار 20 عشوائي
  useEffect(() => {
    const shuffled = [...animals].sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(shuffled);
  }, []);

  if (questions.length === 0) return <div>...جاري تحميل الأسئلة</div>;

  const current = questions[currentIndex];

  // 🎵 تشغيل الصوت
  const playSound = (src) => {
    const audio = new Audio(src);
    setIsPlaying(true);
    audio.play();
    audio.onended = () => setIsPlaying(false);
  };

  // ✅ عند اختيار إجابة
  const handleAnswer = (name) => {
    if (selected) return; // علشان ما يضغطش مرتين
    setSelected(name);

    const correct = name === current.name;
    if (correct) {
      new Audio("/sounds/ok.mp3").play();
      setScore((prev) => prev + 1);

      // ✅ هنا يتحرك للسؤال التالي فقط لو جاوب صح
      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex((prev) => prev + 1);
          setSelected(null);
        } else {
          setFinished(true);
        }
      }, 1000);
    } else {
      // ❌ صوت الخطأ فقط وما يتحركش للسؤال التالي
      new Audio("/sounds/no.mp3").play();

      // خليه يقدر يحاول تاني بعد ثانية
      setTimeout(() => {
        setSelected(null);
      }, 1000);
    }
  };

  // 🔁 إعادة المحاولة
  const restartQuiz = () => {
    const shuffled = [...animals].sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  // 🐾 إنشاء اختيارات عشوائية
  const getOptions = () => {
    const wrong = animals
      .filter((a) => a.name !== current.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    const options = [...wrong, current].sort(() => 0.5 - Math.random());
    return options;
  };

  if (finished) {
    return (
      <div className="section3-container">
        <h2>🎉 أحسنت يا بطل! خلصت الاختبار 🎉</h2>
        <p>
          نتيجتك: {score} من {questions.length}
        </p>
        <button className="retry-btn" onClick={restartQuiz}>
          🔁 أعد المحاولة
        </button>
      </div>
    );
  }

  return (
    <div className="section3-container">
      <h2>🎧 اختبر معرفتك بأصوات الحيوانات</h2>

      <div className="question-box">
        <p>
          السؤال {currentIndex + 1} من {questions.length}
        </p>

        <button
          className={`sound-btn ${isPlaying ? "playing" : ""}`}
          onClick={() => playSound(current.sound)}
        >
          🔊 استمع للصوت
        </button>

        <div className="options">
          {getOptions().map((opt) => (
            <button
              key={opt.name}
              className={`option-btn ${
                selected
                  ? opt.name === current.name
                    ? "correct"
                    : opt.name === selected
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(opt.name)}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
