import { useState } from "react";

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentage={percentage}
      />
    </div>
  );
};

export default App;
