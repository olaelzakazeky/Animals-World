import React, { useState } from "react";
import "./Section2.css";

const animals = [
  {
    name: "الأسد",
    image: "/img/lion.jpg",
    sound: "/sounds/lion.mp3",
    info: "الأسد يُلقب بملك الغابة وهو من أقوى الحيوانات المفترسة."
  },
  {
    name: "الفيل",
    image: "/img/elef.jpg",
    sound: "/sounds/elephant.mp3",
    info: "الفيل أكبر الحيوانات البرية وله خرطوم يستخدمه للشرب والأكل."
  },
  {
    name: "القرد",
    image: "/img/monkey.jpg",
    sound: "/sounds/monkey.mp3",
    info: "القرد حيوان ذكي يحب التسلق واللعب في الغابات."
  },
  {
    name: "الزرافة",
    image: "/img/giraffe.jpg" ,
    sound: "/sounds/giraffe.mp3",
    info: "الزرافة أطول الحيوانات، تستخدم رقبتها الطويلة للوصول إلى أوراق الأشجار."
  },
  {
    name: "النمر",
    image: "/img/animals/tiger.jpg",
    sound: "/sounds/tiger.mp3",
    info: "النمر سريع وماهر في الصيد، يعيش في الغابات الكثيفة."
  },
  {
    name: "الدب",
    image: "/img/animals/bear.jpg",
    sound: "/sounds/bear.mp3",
    info: "الدب حيوان ضخم يأكل العسل والسمك ويعيش في الغابات الباردة."
  },
  {
    name: "الثعلب",
    image: "/img/animals/fox.jpg",
    sound: "/sounds/fox.mp3",
    info: "الثعلب ذكي وسريع، يحب الصيد في الليل."
  },
  {
    name: "الذئب",
    image: "/img/animals/wolf.jpg",
    sound: "/sounds/wolf.mp3",
    info: "الذئب يعيش في مجموعات ويشتهر بالعواء المميز."
  },
  {
    name: "الطاووس",
    image: "/img/animals/peacock.jpg",
    sound: "/sounds/peacock.mp3",
    info: "الطاووس يتميز بريشه الجميل الذي ينشره لعرض الجمال."
  },
  {
    name: "البطة",
    image: "/img/animals/duck.jpg",
    sound: "/sounds/duck.mp3",
    info: "البطة طائر مائي يحب السباحة في البرك والأنهار."
  },
  {
    name: "القط",
    image: "/img/animals/cat.jpg",
    sound: "/sounds/cat.mp3",
    info: "القط لطيف يحب اللعب والنوم كثيرًا."
  },
  {
    name: "الكلب",
    image: "/img/animals/dog.jpg",
    sound: "/sounds/dog.mp3",
    info: "الكلب وفيّ وصديق الإنسان المخلص."
  },
  {
    name: "الحصان",
    image: "/img/animals/horse.jpg",
    sound: "/sounds/horse.mp3",
    info: "الحصان رمز القوة والجمال ويستخدم في السباقات."
  },
  {
    name: "الخروف",
    image: "/img/animals/sheep.jpg",
    sound: "/sounds/sheep.mp3",
    info: "الخروف يعطي الصوف والحليب واللحم."
  },
  {
    name: "البقرة",
    image: "/img/animals/cow.jpg",
    sound: "/sounds/cow.mp3",
    info: "البقرة حيوان أليف يعطينا الحليب واللحم."
  },
  {
    name: "الدجاجة",
    image: "/img/animals/chicken.jpg",
    sound: "/sounds/chicken.mp3",
    info: "الدجاجة تضع البيض وتعيش في المزارع."
  },
  {
    name: "السمكة",
    image: "/img/animals/fish.jpg",
    sound: "/sounds/fish.mp3",
    info: "السمكة تعيش في الماء وتتنفس بالخياشيم."
  },
  {
    name: "التمساح",
    image: "/img/animals/crocodile.jpg",
    sound: "/sounds/crocodile.mp3",
    info: "التمساح يعيش في الأنهار وله فك قوي جدًا."
  },
  {
    name: "الأرنب",
    image: "/img/animals/rabbit.jpg",
    sound: "/sounds/rabbit.mp3",
    info: "الأرنب سريع الحركة ويحب أكل الجزر."
  },
  {
    name: "الببغاء",
    image: "/img/animals/parrot.jpg",
    sound: "/sounds/parrot.mp3",
    info: "الببغاء طائر ذكي يستطيع تقليد كلام الإنسان."
  }
];

function Section2() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-animals text-center">
      <div className="overlay"></div>
      <div className="container py-5 position-relative">
        <h2 className="fw-bold mb-4 text-white">تعرف على حيوانات الغابة 🐾</h2>

        <div className="row g-4">
          {animals.map((animal, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <button
                className="animal-btn"
                onClick={() => setSelected(animal)}
              >
                <img src={animal.image} alt={animal.name} className="animal-thumb" />
                <span className="animal-name">{animal.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* مودال الحيوان */}
        {selected && (
          <div className="animal-modal" onClick={() => setSelected(null)}>
            <div
              className="modal-card d-flex flex-column flex-md-row align-items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
              >
                ✖
              </button>
              <img
                src={selected.image}
                alt={selected.name}
                className="modal-img mb-3 mb-md-0"
              />
              <div className="modal-info text-center text-md-start ms-md-4">
                <h3>{selected.name}</h3>
                <p>{selected.info}</p>
                <div className="modal-controls mt-3">
                  <button
                    className="btn"
                    onClick={() => new Audio(selected.sound).play()}
                  >
                    🔊 استمع للصوت
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section2;
