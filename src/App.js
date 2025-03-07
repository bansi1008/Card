import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setstep] = useState(1);
  const [isopen, setisopen] = useState(true);

  function handleNext() {
    if (step < 3) setstep((s) => s + 1);
  }

  function handleBack() {
    if (step > 1) setstep((s) => s - 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setisopen(!isopen)}>
        &times;
      </button>

      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            <p>
              Step {step}: {messages[step - 1]}
            </p>
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleBack}
            >
              Back
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
