import { useState } from "react";

const Button = (props) => {
  return(
    <div>
      <button onClick={props.onClick} >
      {props.text}
      </button>
    </div>
  )
}

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <p>No statistics to show.</p>
    )
  }
  return(
    <div>
    good:{props.good} <br/>
    neutral:{props.neutral} <br/>
    bad: {props.bad} <br/>
    all: {props.total} <br/>
    average: {(props.total) / 3} <br />
    positive: { props.good*100/(props.total)} %
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral"  />
      <Button onClick={handleBadClick} text="bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} /> 
    </div>
  );
}

export default App;
