import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import "./styles/App.css";

const ScrollToHashElement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [navigate]);

  return null;
};

const AppContent = () => {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <main>
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
