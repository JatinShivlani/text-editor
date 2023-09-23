
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
function App() {
  const [mode, changeMode] = useState("light");
  function modeSwitch() {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = '#141414'
      document.body.style.color = '#807f82'
    } else {
      changeMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'


    }
  }
  return (
    <>
      <Navbar toggleMode={modeSwitch} mode={mode} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter your text hear" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
