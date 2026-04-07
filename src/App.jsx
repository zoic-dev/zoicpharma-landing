import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import ThankYouPage from "./ThankYouPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}
