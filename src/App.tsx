import Home from "./Pages/home";
import Form from "./Pages/form";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/form" element={<Form />} />

    </Routes>

  );
}

export default App;

