import React from "react";
import "./styles/App.css"
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
