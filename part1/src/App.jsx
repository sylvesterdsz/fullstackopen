import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <p>total {props.total}</p>
      <p>average {props.average}</p>
      <p>percentage {props.percentage}%</p>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total;
  const percentage = total === 0 ? 0 : (good / total) * 100;

  const handleGoodReviews = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handleNeutralReviews = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const handleBadReviews = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodReviews} text={"good"} />
      <Button onClick={handleNeutralReviews} text={"neutral"} />
      <Button onClick={handleBadReviews} text={"bad"} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics total={total} average={average} percentage={percentage} />
    </div>
  );
};

export default App;
