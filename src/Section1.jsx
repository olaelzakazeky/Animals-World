import React from "react";

function Section1() {
  return (
    <div
      className="section1 text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/img/animals.jpg')", // ✅ المسار الصحيح
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "150vh",
        position: "relative",
        color: "#3f2b14",
      }}
    >
      {/* فلتر غامق فوق الصورة */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>

      {/* المحتوى */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="display-4 fw-bold mb-3"
          style={{ color: "#f8f3e7", textShadow: "2px 2px 5px #3f2b14" }}
        >
          مـرحبـــاً بكم في عالم الحيوانات 🐾
        </h1>

        <p
          className="mb-4 fs-5"
          style={{
            color: "#f8f3e7",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.8",
            textShadow: "1px 1px 4px #3f2b14",
          }}
        >
          موقع تفاعلي لتعليم الأطفال أسماء الحيوانات وأصواتهم من خلال صور
          وألعاب بسيطة، مع اختبار ممتع في النهاية 🎉
        </p>

        <button
          className="btn rounded-pill py-3 px-5"
          href="#"
          style={{
            backgroundColor: "#9c6b3b",
            border: "none",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }} 
        >
          ابدأ الآن
        </button>
      </div>
    </div>
  );
}

export default Section1;
