import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import TimetableResult from "./TimetableResult/TimetableResult";
import TimetableForm from "./TimetableFrom/TimetableForm";
import ContactPage from "./ContactPage/ContactPage"; // 문의하기 추가

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<TimetableForm />} />
          <Route path="/result" element={<TimetableResult />} />
          <Route path="/contact" element={<ContactPage />} /> {/* 문의하기 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
