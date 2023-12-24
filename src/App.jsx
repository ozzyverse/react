import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Hello Vite + React!</h1>
      <Navbar />
      <Navbar />
    </>
  );
}

export default App;
