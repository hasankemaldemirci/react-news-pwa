import React from "react";

// Components
import Header from "./components/Header/Header"
import Headlines from "./components/Headlines/Headlines"
import Footer from "./components/Footer/Footer"

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
