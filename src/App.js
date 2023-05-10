import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/header";
import Home from "./paginas/home";
import DatosDePersonaje from "./paginas/DatosDePersonaje";
import EventosDePersonaje from "./paginas/EventosDePersonaje";
import Footer from "./componentes/footer"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/datosdepersonaje" element={<DatosDePersonaje/>} />
            <Route path="/:id" element={<DatosDePersonaje/>} />
            <Route path="/eventosdepersonaje" element={<EventosDePersonaje/>} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
