import React, { Component } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
