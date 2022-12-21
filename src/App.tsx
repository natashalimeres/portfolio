import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FaReact } from "react-icons/fa";
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
