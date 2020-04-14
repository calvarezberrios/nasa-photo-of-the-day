import React from "react";
import Header from "./header/Header";
import Home from "../components/content/Home";
import Apod from "../components/content/Apod";
import PhotoByDate from "../components/content/PhotoByDate";
import Footer from "../components/footer/Footer";

function App() {

  return (
    <div className="container">
      <Header />
      <section className = "content">
        <Home />
      </section>
      <Footer />

    </div>
  );
}

export default App;
