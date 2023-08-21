import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `In ${count} ${
                count === 1 ? "day" : "days"
              } it will be ${date.toDateString()}`
            : `${count} ${
                count === -1 ? "day" : "days"
              } ago it was ${date.toDateString()}`}
        </span>
      </p>
    </>
  );
}
