import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import BatList from "./Components/BatList";
import Misclist from "./Components/Misclist";
import Contact from "./Components/Contact";
import BbqGList from "./Components/BbqGList";
import Reddy2list from "./Components/Reddy2list";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="bat">
        <BatList />
      </section>
      <section id="misc">
        <Misclist />
        <Reddy2list />
      </section>
      <section id="bbqdragon">
        <BbqGList />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
