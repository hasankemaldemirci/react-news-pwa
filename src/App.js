import React from "react";

// Components
import Header from "./components/header/Header"
import Headlines from "./components/headlines/Headlines"
import Footer from "./components/footer/Footer"

// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <div className="container">
          <Headlines />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
