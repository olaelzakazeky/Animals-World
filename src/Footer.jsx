import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-circle">🐾</div>
          <div>
            <h4>غابة التعلم</h4>
            <p className="tagline">لعبة وتعلم ومرح للأطفال</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="روابط">
          <a href="#section2">الحيوانات</a>
          <a href="#section3">اختبار الأصوات</a>
          <a href="#section4">اختبار المعرفة</a>
        </nav>

        <div className="footer-contact">
          <p>تواصل معنا</p>
          <div className="socials">
            <a href="#" aria-label="واتساب">💬</a>
            <a href="#" aria-label="يوتيوب">📺</a>
            <a href="#" aria-label="انستجرام">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} غابة التعلم — جميع الحقوق محفوظة</p>
        <p className="small-note">مصمم بحب ❤️ بواسطة تيم تكنو ابداع</p>
      </div>
    </footer>
  );
}
