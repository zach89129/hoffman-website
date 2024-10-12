import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import "./styles/App.css";

const AppContent = () => {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
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
